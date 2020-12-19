import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function User() {
  return (
    <div className="login-box">
      <div className="login-sub-box">
        <Login />
      </div>
      <div className="vertical-line"></div>
      <div className="login-sub-box signup-box ">
        <Signup />
      </div>
    </div>
  );
}
