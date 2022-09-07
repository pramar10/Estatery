import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./searchbar.style.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <h1 className="search-heading">Search properties to rent</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search with Search Bar"
          onChange={(e) => console.log("hello")}
        />
        <KeyboardArrowDownIcon className="search-arrow" />
      </div>
    </div>
  );
};

export default SearchBar;
