import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Navbar = ({ progress }) => {
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  const handleToggle = () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <Link to="/">NIMBO</Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <a id="developer" to="/" className="action-btn">
            By Jisan
          </a>
          <div className="toggle_btn" onClick={handleToggle}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="/gallert">Gallery</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/blood-bank">Blood Bank</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a id="mb-developer" to="/" className="action-btn">
              By Jisan
            </a>
          </li>
        </div>
      </header>

      <Outlet />
      <LoadingBar color="#f11946" progress={progress} height={2} />
    </>
  );
};

export default Navbar;
