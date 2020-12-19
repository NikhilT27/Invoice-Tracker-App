import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    const user = await axios.post("/users/login", data);
    if (user) {
      // console.log(user.data);
      localStorage.setItem("authToken", user.data.token);
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
          {errors.email && errors.email.type === "register" && (
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
        <div className="submit-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
