import React, { Component } from "react";
import "./Filters.css";

class Filters extends Component {
  render = () => {
    //rendu de la boîte des filtres
    return (
      <div className="filter-box">
        <span style={{ color: "#ffffff", fontWeight: "bold" }}>ONLY</span>
        <div className="filter-checkbox">
          <input type="checkbox" />
          <div style={{ paddingLeft: "5px" }}> Teams</div>
        </div>
        <span style={{ color: "#ffffff", fontWeight: "bold" }}>LOCATION</span>
        <div className="filter-checkbox">
          <input type="checkbox" />
          <div style={{ paddingLeft: "5px" }}>Remote / Anywhere</div>
        </div>
        <div className="filter-input-box">
          <img
            alt=""
            src="map-placeholder.svg"
            height="20px"
            className="filter-icon"
          />
          <input type="text" placeholder="All" className="filter-input" />
        </div>
        <div style={{ color: "#8c8c8c" }}>Enter a city, state or coutnry</div>
        <div className="search-button">Search</div>
      </div>
    );
  };
}

export default Filters;
