import React from "react";
import GalleryItem from "./GalleryItem";
import "./styles.css";
const GalleryList = ({ gallery }) => {
  const openFullImg = (e) => {
    let fullImgBox = document.getElementById("fullImgBox");
    let fullImg = document.getElementById("fullImg");

    fullImgBox.style.display = "flex";
    fullImg.src = e.target.src;
  };
  const closeFullImg = () => {
    fullImgBox.style.display = "none";
  };
  return (
    <>
      <div className="galleryItem-wrap">
        <div className="full-img" id="fullImgBox">
          <img src="/assets/images/img1.jpg" alt="img1" id="fullImg" />
          <span onClick={closeFullImg}>X</span>
        </div>

        <div className="img-gallery">
          {gallery.map((item, id) => (
            <GalleryItem item={item} key={id} openFullImg={openFullImg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryList;
