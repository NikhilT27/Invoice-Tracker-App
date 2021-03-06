import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import AddInvoice from "./AddInvoice";

export default function ApprovedInvoice() {
  const [userInvoices, setUserInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [fromDate, setFromDate] = useState(
    moment("2000-01-01").format("YYYY-MM-DD")
  );

  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));

  const [addInvoiceOpen, setAddInvoiceOpen] = useState(false);

  useEffect(() => {
    getUserInvoices();
  }, []);

  async function getUserInvoices() {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    if (token) {
      console.log("token");
    }

    const result = await axios.post(
      "/invoice/viewInvoice",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (result) {
      setLoading(false);
      setUserInvoices(result.data);
      console.log(result.data);
    }
    return setLoading(false);
  }

  const getCount = () => {
    if (userInvoices.length > 0) {
      const result = userInvoices.filter(
        (invoice) =>
          invoice.status === "APPROVED" &&
          moment(invoice.date).isBetween(
            fromDate,
            moment(toDate).add(1, "d").format("YYYY-MM-DD"),
            undefined,
            "[]"
          )
      );
      return result.length;
    }
    return 0;
  };

  console.log(toDate);
  console.log(fromDate);
  if (moment("2016-10-30").isBetween(fromDate, toDate)) {
    console.log("working");
  }

  let countTotal = 0;

  const addThisOne = (amount) => {
    if (amount) {
      countTotal += Number(amount);
    }
  };

  return (
    <div>
      {addInvoiceOpen ? (
        <AddInvoice />
      ) : (
        <div className="invoice-box">
          <div className="invoice-titles">APPROVED INVOICES</div>
          <div className="home-number-invoices">
            <div>{`Total number of invoices: ${getCount()}`}</div>
            <div>
              <label>Filter</label>
              <div className="filter-to-from">
                <div>
                  <label>From: </label>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value={fromDate}
                    min="2000-01-01"
                    max={moment().format("YYYY-MM-DD")}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div>
                  <label>To: </label>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value={toDate}
                    min="2000-01-01"
                    max={moment().format("YYYY-MM-DD")}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-all-invoice default-title">
            <div className="invoice-name">Invoice Name</div>
            <div className="invoice-date">Invoice Date</div>
            <div className="invoice-amount">Invoice Amount</div>
          </div>
          {loading ? (
            <div className="loader-div">
              <div className="loader-invoice"></div>
            </div>
          ) : userInvoices.length > 0 ? (
            userInvoices.map((invoice) => {
              //   console.log(invoice);
              if (
                invoice.status === "APPROVED" &&
                moment(invoice.date).isBetween(
                  fromDate,
                  moment(toDate).add(1, "d").format("YYYY-MM-DD"),
                  undefined,
                  "[]"
                )
              ) {
                return (
                  <div
                    key={invoice._id}
                    onClick={() => {
                      console.log(`clicked ${invoice._id}`);
                    }}
                    className="home-all-invoice"
                  >
                    <div className="invoice-name">{invoice.name}</div>
                    <div className="invoice-date">
                      {moment(invoice.date).format("DD-MM-YY")}
                    </div>
                    <div className="invoice-amount">{invoice.amount}</div>
                    {addThisOne(invoice.amount)}
                  </div>
                );
              }
            })
          ) : (
            <div className="empty-invoices">Empty Approved Invoices !!</div>
          )}

          <div className="home-all-invoice default-footer">
            <div>Total Amount</div>
            <div></div>
            <div>{countTotal}</div>
          </div>
        </div>
      )}

      <div
        className="float-add-button"
        onClick={() => setAddInvoiceOpen(!addInvoiceOpen)}
      >
        {addInvoiceOpen ? "Cancel" : "Add"}
      </div>
    </div>
  );
}
