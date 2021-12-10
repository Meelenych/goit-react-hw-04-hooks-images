import ImageGalleryItem from "../GalleryItem/ImageGalleryItem";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Button from "../ButtonLoadMore/Button";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ImageGallery.module.css";
import { fetchApi } from "../../service/api";

export default function ImageGallery({ submitValue }) {
	const [images, setImages] = useState([]);
	const [largeImageURL, setLargeImageURL] = useState("");
	const [tags, setTags] = useState("");
	const [page, setPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (submitValue === "") {
			return;
		}
		if (submitValue !== "") {
			setLoading(true);
			setPage(1);
			fetchApi(submitValue, 1)
				.then((results) => {
					setImages([...results.hits]);

					if (results.hits.length >= 1 && page <= 1) {
						toast.success("Search successfull!");
					} else if (results.hits.length === 0) {
						toast.error("Oops, nothing found!");
					}
				})
				.catch((err) => {
					toast.error("Fetch error!");
					console.log(err);
				})
				.finally(() => setLoading(false));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submitValue]);

	//для лоадмор
	useEffect(() => {
		if (page !== 1) {
			setLoading(true);
			fetchApi(submitValue, page)
				.then((results) => {
					setImages([...images, ...results.hits]);

					if (results.hits.length >= 1 && page > 1) {
						toast.success("More results successfully loaded!");
					} else if (results.hits.length === 0 && page > 1) {
						toast.error("Oops, nothing more!");
					}
				})
				.catch((err) => {
					toast.error("Fetch error!");
					console.log(err);
				})
				.finally(() => setLoading(false));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const loadMore = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	});

	const bigImageSetState = (largeImageURL) => {
		setLargeImageURL(largeImageURL);
	};

	const closeModal = () => {
		setShowModal(!showModal);
		setLargeImageURL("");
		setTags("");
	};

	return (
		<>
			<ul className={styles.ImageGallery}>
				{loading && <Loader />}
				{images.map(({ id, webformatURL, largeImageURL, tags }) => (
					<ImageGalleryItem
						key={id}
						webformatURL={webformatURL}
						largeImageURL={largeImageURL}
						tags={tags}
						onClickProps={bigImageSetState}
					/>
				))}
				{images.length !== 0 && <Button onClick={loadMore} />}
			</ul>

			{largeImageURL && (
				<Modal onClose={closeModal}>
					<button
						type="button"
						className={styles.CloseBtn}
						onClick={closeModal}
					>
						X
					</button>
					<img src={largeImageURL} alt={tags} />
				</Modal>
			)}
		</>
	);
}
