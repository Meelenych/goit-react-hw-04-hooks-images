import ImageGalleryItem from "../GalleryItem/ImageGalleryItem";
import { Component } from "react";
import Modal from "../Modal/Modal";
import Button from "../ButtonLoadMore/Button";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ImageGallery.module.css";
import { fetchApi } from "../../service/api";

class ImageGallery extends Component {
	state = {
		images: [],
		largeImageURL: "",
		tags: "",
		showModal: false,
		page: 1,
		loading: false,
	};

	async componentDidUpdate(prevProps, prevState) {
		const page = this.state.page;
		let searchQuery = this.props.submitValue;

		//Main fetch
		if (prevProps.submitValue !== searchQuery) {
			this.setState({ loading: true });

			fetchApi(searchQuery, page)
				.then((results) => {
					// console.log(fetchApi);
					this.setState({
						images: [...results.hits],
					});
					if (results.hits.length !== 0) {
						toast.success("Search successfull!");
					} else if (results.hits.length === 0) {
						toast.error("Oops, nothing found!");
					}
				})
				.catch((err) => {
					toast.error("Fetch error!");
				})
				.finally(() => this.setState({ loading: false }));
		}

		//Load more fetch
		if (page !== prevState.page) {
			fetchApi(searchQuery, page)
				.then((results) => {
					this.setState((prevState) => {
						return { images: [...prevState.images, ...results.hits] };
					});
					if (results.hits.length !== 0) {
						toast.success("More results successfully loaded!");
					} else if (results.hits.length === 0) {
						toast.error("Oops, nothing more!");
					}
				})
				.catch((err) => {
					toast.error("Fetch error!");
				})
				.finally(() => this.setState({ loading: false }));
		}
	}

	loadMore = () => {
		this.setState((prevState) => {
			console.log("loadmore clicked");
			return { page: prevState.page + 1 };
		});
	};

	bigImageSetState = (bigImage, description) => {
		this.setState({ largeImageURL: bigImage, tags: description });
	};

	closeModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
			largeImageURL: "",
			tags: "",
		}));
	};

	render() {
		return (
			<>
				<ul className={styles.ImageGallery}>
					{this.state.loading && <Loader />}
					{this.state.images.map(
						({ id, webformatURL, largeImageURL, tags }) => (
							<ImageGalleryItem
								key={id}
								webformatURL={webformatURL}
								largeImageURL={largeImageURL}
								tags={tags}
								onClickProps={this.bigImageSetState}
							/>
						)
					)}
					{this.state.images.length !== 0 && <Button onClick={this.loadMore} />}
				</ul>

				{this.state.largeImageURL && (
					<Modal onClose={this.closeModal}>
						<button
							type="button"
							className={styles.CloseBtn}
							onClick={this.closeModal}
						>
							X
						</button>
						<img src={this.state.largeImageURL} alt={this.state.tags} />
					</Modal>
				)}
			</>
		);
	}
}

export default ImageGallery;
