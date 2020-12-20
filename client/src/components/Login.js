import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    const user = await axios.post("/users/login", data);

    if (user) {
      if (user.data.token) {
        // console.log(user.data);
        localStorage.setItem("authToken", user.data.token);
        // console.log(jwtDecode(localStorage.getItem("authToken")));
        history.push("/Home");
      } else {
        // console.log(user.data.errors.user);
        setLoginError(user.data.errors.user);
      }
    }
  };

  return (
    <div className="login-form">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-element">
          <label>Email</label>
          <input
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <div className="form-error">*Email is required</div>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <div className="form-error">*Invalid email</div>
          )}
        </div>
        <div className="login-form-element">
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.password && (
            <div className="form-error">*Password is required</div>
          )}
        </div>
        <div className="login-form-element">
          <div className="form-error">{loginError}</div>
        </div>
        <div className="submit-button">
          <button className="button-style" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
