import React, { useEffect, useState } from "react";
import "./styles.css";
import Hero from "../../components/common/Hero/Index";
import BlogList from "../../components/Blog/BlogList";
import Spinner from "../../components/common/Spinner";

const index = ({ setProgress }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filterValue, setFilterValue] = useState();

  const getPosts = async () => {
    setLoading(true);
    setProgress(30);
    let url = `https://dummyjson.com/posts?limit=60`;
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    setProgress(75);
    setBlogs(parsedData.posts);
    setLoading(false);
    setProgress(100);
  };
  const handleFilter = async (subject) => {
    switch (subject) {
      case "english":
        document.getElementById(subject).classList.add("active");
        document.getElementById("history").classList.remove("active");
        document.getElementById("american").classList.remove("active");
        break;
      case "history":
        document.getElementById(subject).classList.add("active");
        document.getElementById("english").classList.remove("active");
        document.getElementById("american").classList.remove("active");
        break;
      case "american":
        document.getElementById(subject).classList.add("active");
        document.getElementById("english").classList.remove("active");
        document.getElementById("history").classList.remove("active");
        break;
      default:
        break;
    }
    setLoading(true);
    let url = `https://dummyjson.com/posts?limit=60`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let posts = parsedData.posts;
    let filterPost = posts.filter((post) => post.tags.includes(subject));
    setBlogs(filterPost);
    setLoading(false);
  };
  const handleClearFilter = () => {
    document.getElementById("english").classList.remove("active");
    document.getElementById("american").classList.remove("active");
    document.getElementById("history").classList.remove("active");
    getPosts();
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Blog Page Hero Section - Nimbo Blog */}
      <Hero label="Nimbo Blog" />

      {/* Blog Page Blog Filter - English, History, American */}

      <div className="blogFilter-wrap">
        <button
          id="english"
          onClick={() => {
            handleFilter("english");
          }}
        >
          English
        </button>
        <button
          id="history"
          onClick={() => {
            handleFilter("history");
          }}
        >
          History
        </button>
        <button
          id="american"
          onClick={() => {
            handleFilter("american");
          }}
        >
          American
        </button>
        <span onClick={handleClearFilter} className="clear-filter">
          X
        </span>
      </div>

      {/* All Blogs of Nimbo */}
      {loading && <Spinner />}
      {!loading && <BlogList blogs={blogs} />}
    </>
  );
};

export default index;
