import React from "react";
import "./filtercard.style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FilterCard = ({ heading, subHeading, icon, dropDown, property }) => {
  return (
    <div className="main-filter-card">
      <div className="filter-card">
        <p className="filter-heading">{heading}</p>
        <div className="filter-div-subheading">
          <p>{subHeading}</p>
          {icon && <KeyboardArrowDownIcon className="down-filter" />}
        </div>
      </div>
      <div className="vertical-line" />
    </div>
  );
};

export default FilterCard;
