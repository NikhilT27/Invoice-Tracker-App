import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function InvoiceOption({ invoiceID }) {
  const { register, handleSubmit, watch, errors } = useForm();

  const history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);
    if (data != {}) {
      const updateObj = {};
      for (const key in data) {
        if (data[key] != "") {
          updateObj[key] = data[key];
        }
      }
      console.log(updateObj);
      console.log({ invoiceID, updateObj });
      const token = localStorage.getItem("authToken");
      const user = await axios.post(
        "/invoice/updateInvoice",
        { invoiceID, updateObj },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (user) {
        console.log(user);
        history.go(0);
        // history.push("/Home");
      }
    }
    console.log(invoiceID);
  };

  const deleteInvoice = async () => {
    const token = localStorage.getItem("authToken");
    const user = await axios.post(
      "/invoice/deleteInvoice",
      { invoiceID },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (user) {
      console.log(user);
      history.go(0);
      // history.push("/Home");
    }
    console.log("delete");
  };

  return (
    <div className="invoice-option-box">
      <div className="option-sub-box ">
        <div className="login-form">
          <div className="title ">Update</div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-element">
              <label>Only enter data that need to be changed</label>
            </div>
            <div className="login-form-element">
              <label className="">Name</label>
              <input
                name="name"
                ref={register({
                  validate: (value) => typeof value === "string",
                })}
              />
              {errors.name && errors.name.type === "validate" && (
                <div className="form-error signup-error">
                  *name must be string
                </div>
              )}
            </div>
            <div className="login-form-element">
              <label className="">Amount</label>
              <input type="number" name="amount" ref={register({})} />
            </div>

            <div className="login-form-element">
              <label className="">Image</label>
              <input name="image" ref={register({})} />
            </div>
            <div className="login-form-element">
              <div className="option-buttons-box">
                <div className="submit-button">
                  <button type="submit">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button className="delete-invoice" onClick={() => deleteInvoice()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
