import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const checkConfirmPassword = () => {
    if (watch("password") !== watch("confirmPassword")) {
      return false;
    } else {
      return true;
    }
  };

  console.log(watch("email"));
  return (
    <div className="login-form">
      <div className="title signup-title">Signup</div>
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
            <div className="form-error signup-error">*Password is required</div>
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
            <div className="form-error signup-error">*Password is required</div>
          )}
          {errors.password && errors.password.type === "validate" && (
            <div className="form-error signup-error">
              *Password must be same
            </div>
          )}
        </div>
        <div className="submit-button">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
