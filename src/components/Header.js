import React from "react";
import Button from "./Button";
import "./header.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/user";
import { auth } from "../firebase/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const displayUser = user?.email.split("@");
  let navigate = useNavigate();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    navigate("/home");
  };
  return (
    <div className="div-header">
      <div className="real-state-logo">
        <img
          src={require("../constant/img/real.jpg")}
          className="real-state-img"
          alt="header"
        />
        <h1>Estatery</h1>
        <ul>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resources</li>
        </ul>
      </div>
      {!user && (
        <div className="div-btn">
          <Button
            label={"Login"}
            bg="#fff"
            textColor={"#7048e8"}
            onClick={() => navigate("/login")}
          />
          <Button
            label={"Signup"}
            bg="#7048e8"
            textColor={"#fff"}
            onClick={() => navigate("/signup")}
          />
        </div>
      )}
      {user && (
        <div className="div-btn">
          <p className="user-login">Welcome {displayUser[0]}</p>
          <Button
            label={"logout"}
            bg="#7048e8"
            textColor={"#fff"}
            onClick={logoutOfApp}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
