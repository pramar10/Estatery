import React from "react";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import "./capsule.style.css";

const Capsule = ({ icon, name }) => {
  let flag1 = false,
    flag2 = false;
  if (name.split(" ")[1] === "Beds") flag1 = true;
  if (name.split(" ")[1] === "Bathrooms") flag2 = true;
  return (
    <div className="capsule">
      {flag1 && <BiBed className="capsule-icon" size={"22px"} />}
      {flag2 && <BiBath className="capsule-icon" size={"22px"} />}
      {!flag1 && !flag2 && <BiArea className="capsule-icon" size={"22px"} />}
      <p>{name}</p>
    </div>
  );
};

export default Capsule;
