import React from "react";
import "./styles.css";
const GalleryItem = ({ item: { urls }, openFullImg }) => {
  return (
    <>
      <img src={urls.regular} alt="img" onClick={openFullImg} />
    </>
  );
};

export default GalleryItem;
