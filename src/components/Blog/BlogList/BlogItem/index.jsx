import React from "react";
import "./styles.css";

const BlogItem = ({ blog: { id, title, body, tags } }) => {
  const handleAccordion = (e) => {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };

  return (
    <>
      <div className="blogItem-wrap">
        <button className="accordion" onClick={handleAccordion}>
          Post: {id} : {title}
        </button>
        <div className="panel">
          <p>{body}</p>
          {tags.map((tag, id) => (
            <span className="badge" key={id}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogItem;
