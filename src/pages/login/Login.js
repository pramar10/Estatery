import React from "react";
import Button from "../../components/Button";
import "./login.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Login = () => {
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loginToApp = () => {
    if (!email || !password) {
      return alert("Please enter the login credentials");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        navigate("/home");
      })
      .catch(() => alert("User not found"));
    setPassword("");
    setEmail("");
  };
  return (
    <div className="login-main-div">
      <div className="login-content">
        <h1>Estatery</h1>
        <input
          className="input-box"
          placeholder="Enter email or phone number"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Enter Password"
          className="input-box"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          label={"Login"}
          bg="#7048e8"
          textColor={"#fff"}
          onClick={loginToApp}
        />
        <p>
          Don't have account ?
          <a onClick={() => navigate("/signup")} className="back-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
