import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function InvoiceOptionAdmin({ invoiceID }) {
  const history = useHistory();

  const approveInvoice = async () => {
    const token = localStorage.getItem("authToken");
    const user = await axios.post(
      "/invoice/approveInvoice",
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
    console.log("approve");
  };

  const rejectInvoice = async () => {
    const token = localStorage.getItem("authToken");
    const user = await axios.post(
      "/invoice/rejectInvoice",
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
    console.log("reject");
  };

  return (
    <div className="invoice-option-box">
      <div className="option-sub-box ">
        <div className="login-form">
          <div className="title ">Options</div>
          <div className="admin-option">
            <div>
              <button
                className="delete-invoice"
                onClick={() => approveInvoice()}
              >
                Approve
              </button>
            </div>
            <div>
              <button
                className="delete-invoice"
                onClick={() => rejectInvoice()}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
