import React, { useEffect, useState } from "react";
import "./styles.css";
import Hero from "../../components/common/Hero/Index";
import GalleryList from "../../components/Gallery/GalleryList";
import Spinner from "../../components/common/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const Gallery = ({ setProgress }) => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const totalPage = 10;

  const getGallery = async () => {
    setLoading(true);
    setProgress(30);
    let url = `https://api.unsplash.com/search/photos?client_id=vssir3ikLfDTFf379QTIwr4KpKw8YfsUyG43w-NA65g&page=${page}&query=lemon&per_page=12&orientation=landscape`;
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    setProgress(75);
    setGallery(parsedData.results);
    setLoading(false);
    setProgress(100);
  };
  const fetchMoreData = async () => {
    const url = `https://api.unsplash.com/search/photos?client_id=vssir3ikLfDTFf379QTIwr4KpKw8YfsUyG43w-NA65g&page=${
      page + 1
    }&query=lemon&per_page=12&orientation=landscape`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setGallery(gallery.concat(parsedData.results));
  };
  useEffect(() => {
    getGallery();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* Gallery Page Hero Section - Nimbo Gallery */}
      <Hero label="Nimbo Gallery" />
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={gallery.length}
        next={fetchMoreData}
        hasMore={page !== totalPage}
        loader={<Spinner />}
      >
        <GalleryList gallery={gallery} />
      </InfiniteScroll>
    </>
  );
};

export default Gallery;
