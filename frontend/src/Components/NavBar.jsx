import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import "./NavBar.css";

class NavBar extends Component {
  render = () => {
    return (
      <div className="navbar-header">
        <div style={{ display: "flex" }}>
          <img
            alt="logo"
            src="/logo.png"
            style={{ height: "20px", paddingRight: "40px" }}
          />
          <div className="navbar-item">Shots</div>
          <div className="navbar-item">Designers</div>
          <div className="navbar-item">Teams</div>
          <div className="navbar-item">Meetups</div>
          <div className="navbar-item">Jobs</div>
          <img
            alt="See more..."
            src="three-dots-more-indicator.svg"
            className="icon"
            style={{ height: "20px", paddingRight: "30px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <img
            alt="See more..."
            src="call-made-right-arrow.svg"
            className="icon"
            style={{ height: "20px", paddingRight: "30px" }}
          />
          <img
            alt="See more..."
            src="cloud-backup-up-arrow.svg"
            className="icon"
            style={{ height: "25px", paddingRight: "30px" }}
          />
          <SearchBar />
        </div>
      </div>
    );
  };
}

export default NavBar;
