import React from "react";
import Button from "../../components/Button";
import "./signup.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const register = () => {
    if (!name && !email && !phone && !password) {
      return alert("Please enter all details!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
            })
          );
        });
      })
      .catch(() => alert("User not found"));
    setName("");
    setPhone("");
    setPassword("");
    setEmail("");
    navigate("/home");
  };
  return (
    <div className="login-main-div">
      <div className="login-content">
        <h1>Estatery</h1>
        <input
          className="input-box"
          placeholder="Enter the name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder="Enter Email id"
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Enter Phone number"
          className="input-box"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          placeholder="Enter Password"
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={"password"}
        />
        <Button
          label={"Signup"}
          bg="#7048e8"
          textColor={"#fff"}
          onClick={register}
        />
        <p>
          Back to
          <a onClick={() => navigate("/login")} className="back-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
