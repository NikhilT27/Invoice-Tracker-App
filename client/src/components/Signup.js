import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const history = useHistory();
  const onSubmit = async (data) => {
    setLoading(true);
    const user = await axios.post("/users/register", data);

    if (user) {
      setLoading(false);

      if (user.data.token) {
        // console.log(user.data);
        localStorage.setItem("authToken", user.data.token);
        // console.log(jwtDecode(localStorage.getItem("authToken")));
        history.push("/Home");
      } else {
        console.log(user.data.errors.user);
        setLoginError(user.data.errors.user);
        console.log(loginError);
      }
    }
  };

  const checkConfirmPassword = () => {
    if (watch("password") !== watch("confirmPassword")) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="login-form">
      <div className="title signup-title">Signup</div>
      {loading ? (
        <div className="loader-div">
          <div className="loader"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-element">
            <label className="signup-title">Email</label>
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
              <div className="form-error signup-error">*Email is required</div>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <div className="form-error signup-error">*Invalid email</div>
            )}
          </div>
          <div className="login-form-element">
            <label className="signup-title">Password</label>
            <input
              name="password"
              type="password"
              ref={register({ required: true, validate: checkConfirmPassword })}
            />
            {errors.password && errors.password.type === "required" && (
              <div className="form-error signup-error">
                *Password is required
              </div>
            )}
            {errors.password && errors.password.type === "validate" && (
              <div className="form-error signup-error">
                *Password must be same
              </div>
            )}
          </div>
          <div className="login-form-element">
            <label className="signup-title">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              ref={register({ required: true, validate: checkConfirmPassword })}
            />
            {errors.confirmPassword && errors.password.type === "required" && (
              <div className="form-error signup-error">
                *Password is required
              </div>
            )}
            {errors.password && errors.password.type === "validate" && (
              <div className="form-error signup-error">
                *Password must be same
              </div>
            )}
          </div>
          <div className="submit-button">
            <button className="button-style botton-style-dark " type="submit">
              Signup
            </button>
          </div>
          <div></div>
        </form>
      )}
    </div>
  );
}
