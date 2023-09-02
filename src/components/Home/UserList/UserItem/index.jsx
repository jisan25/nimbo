import React from "react";
import "./styles.css";
const UserItem = ({ user: { description, urls }, fltrImgDarkClass }) => {
  const cmToFeet = (val) => {
    let feetWtMnyDigits = val * 0.032;
    let feet = Math.ceil(feetWtMnyDigits * 100) / 100;
    return feet;
  };
  return (
    <div className="userItem-wrap">
      <div className="userItem-container">
        <img
          src={urls.regular}
          alt="User Cover"
          className={`${fltrImgDarkClass} userItem-cover`}
        />
        <div className="userItem-overlay">
          <div className="userItem-overlay-text">
            <p>
              {!description ? "No description Given" : description.slice(0, 35)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
