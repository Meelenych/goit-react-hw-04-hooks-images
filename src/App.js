import { useState } from "react";
import SearchBar from "./components/SearchBar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import styles from "./App.module.css";

export default function App() {
  //   state = {
  //     images: [],
  //     submitValue: "",
  //   };

  const [submitValue, setSubmitValue] = useState("");

  const onFormSubmit = (data) => {
    setSubmitValue({ submitValue: data });
  };

  return (
    <div className={styles.App}>
      <SearchBar onFormSubmit={onFormSubmit} />
      <ImageGallery submitValue={submitValue} />
    </div>
  );
}
