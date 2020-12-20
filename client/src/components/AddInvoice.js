import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

export default function AddInvoice() {
  const [loginError, setLoginError] = useState("");
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      console.log(data);
      const token = localStorage.getItem("authToken");
      const user = await axios.post("/invoice/createInvoice", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (user) {
        console.log(user);
        history.push("/Home");
      }
    }
  };

  //   const rejectInvoice = async () => {
  //     const token = localStorage.getItem("authToken");
  //     const user = await axios.post(
  //       "/invoice/rejectInvoice",
  //       { invoiceID },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     if (user) {
  //       console.log(user);
  //       history.go(0);
  //       // history.push("/Home");
  //     }
  //     console.log("reject");
  //   };

  return (
    <div className="create-invoice">
      <div className="login-form">
        <div className="title">Add Invoice</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-element">
            <label>Name</label>
            <input
              name="name"
              ref={register({
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <div className="form-error">*Name is required</div>
            )}
          </div>
          <div className="login-form-element">
            <label>Amount</label>
            <input
              name="amount"
              type="number"
              ref={register({
                required: true,
              })}
            />
            {errors.amount && errors.amount.type === "required" && (
              <div className="form-error">*Amount is required</div>
            )}
          </div>
          <div className="login-form-element">
            <label>Image</label>
            <input
              name="imageFile"
              ref={register({
                required: true,
              })}
            />
            {errors.imageFile && errors.imageFile.type === "required" && (
              <div className="form-error">*Image is required</div>
            )}
          </div>
          <div className="login-form-element">
            <div className="form-error">{loginError}</div>
          </div>
          <div className="submit-button">
            <button className="button-style" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
