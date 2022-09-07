import React from "react";
import "./homecard.style.css";
import { AiOutlineHeart } from "react-icons/ai";
import Capsule from "./Capsule";
const HomeCard = ({ pic, price, restaurant, location, details }) => {
  return (
    <div className="home-card">
      <div className="home-img">
        <p>Hello</p>
        <img src={pic} alt={"capsule"}/>
      </div>
      <div className="home-rent">
        <p>
          <span>${price}</span>/month
        </p>
        <AiOutlineHeart
          className="fav-icon"
          size={"14px"}
          style={container.iconStyle}
        />
      </div>
      <div className="home-name">
        <h3>{restaurant}</h3>
        <p>{location}</p>
      </div>
      <div className="horizontal-line" />
      <div className="room-detail">
        {details.map((item) => {
          return <Capsule name={item} />;
        })}
      </div>
    </div>
  );
};
const container = {
  iconStyle: {
    color: "#6741d9",
  },
};
export default HomeCard;
