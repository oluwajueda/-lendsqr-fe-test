import React from "react";
import lendsqr from "../photos/lendsqr.png";
import union from "../photos/Union.png";
import bell from "../photos/bell.png";
import searchicon from "../photos/searchicon.png";
import profileimage from "../photos/profileImage.png";
import dropicon from "../photos/dropicon.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="navbar_div">
        <div className="navbar_logo">
          <img className="navbar_union_logo" src={union} alt="" />
          <img className="navbar_lendsqr_logo" src={lendsqr} alt="" />
        </div>
        <div className="navbar_search_div">
          <input
            className="navbar_search_input"
            placeholder="search for anything"
          />
          <button className="navbar_search_button">
            <img src={searchicon} alt="" />
          </button>
        </div>
      </div>
      <div className="navbar_items">
        <a href="/" className="navbar_nav_items ">
          Docs
        </a>
        <img src={bell} alt="" className="navbar_nav_items bell" />
        <img
          src={profileimage}
          alt=""
          className="navbar_nav_items profile_image"
        />
        <h6 className="navbar_nav_items">Adedeji</h6>
        <img src={dropicon} alt="" className="navbar_nav_items dropdown" />
        <div>
          <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
