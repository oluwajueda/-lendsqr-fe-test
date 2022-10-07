import React from "react";
import lendsqr from "../photos/lendsqr.png";
import union from "../photos/Union.png";
import bell from "../photos/bell.png";
import searchicon from "../photos/searchicon.png";
import profileimage from "../photos/profileImage.png";
import dropicon from "../photos/dropicon.png";

const Dashboard = () => {
  return (
    <div className="dashboard_page">
      <nav>
        <div className="logo_search_div">
          <div className="dashboard_logo">
            <img className="union_dashboard_logo" src={union} alt="" />
            <img className="lendsqr_dashboard_logo" src={lendsqr} alt="" />
          </div>
          <div className="search_input_div">
            <input className="search_input" placeholder="search for anything" />
            <button className="search_button">
              <img src={searchicon} alt="" />
            </button>
          </div>
        </div>
        <div className="dashboard_nav_items">
          <a href="/" className="nav_items ">
            Docs
          </a>
          <img src={bell} alt="" className="nav_items bell" />
          <img src={profileimage} alt="" className="nav_items profile_image" />
          <h6 className="nav_items">Adedeji</h6>
          <img src={dropicon} alt="" className="nav_items dropdown" />
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
