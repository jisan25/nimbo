import React from "react";
import "./styles.css";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog, id) => (
        <BlogItem blog={blog} key={id} />
      ))}
    </div>
  );
};

export default BlogList;
