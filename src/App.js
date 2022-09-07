import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
