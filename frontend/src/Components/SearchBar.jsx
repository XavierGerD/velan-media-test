import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render = () => {
    // rendu de la barre de recherche
    return (
      <div className="search">
        <input className="search-input" placeholder="Search" type="text" />
        <img
          src="/searching-magnifying-glass.svg"
          alt=""
          className="search-icon"
        />
      </div>
    );
  };
}

export default SearchBar;
