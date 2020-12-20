import { set } from "mongoose";
import React, { useState } from "react";
import moment from "moment";

import InvoiceOption from "../components/InvoiceOption";

export default function PendingInvoices({ userInvoices }) {
  const [fromDate, setFromDate] = useState(
    moment("2000-01-01").format("YYYY-MM-DD")
  );

  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [optionInvoiceID, setOptionInvoiceID] = useState("");

  const openInvoice = (invoice) => {
    console.log(`clicked ${invoice._id}`);
    if (optionInvoiceID === "") {
      setOptionInvoiceID(invoice._id);
    } else {
      setOptionInvoiceID("");
    }
  };

  const getCount = () => {
    if (userInvoices.length > 0) {
      const result = userInvoices.filter(
        (invoice) =>
          invoice.status === "PENDING" &&
          moment(invoice.date).isBetween(fromDate, toDate)
      );
      return result.length;
    }
    return 0;
  };

  let countTotal = 0;

  const addThisOne = (amount) => {
    if (amount) {
      countTotal += Number(amount);
    }
  };

  return (
    <div className="invoice-box">
      <div className="invoice-titles">PENDING INVOICES</div>
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
      {userInvoices.length > 0 ? (
        userInvoices.map((invoice) => {
          //   console.log(invoice);
          if (
            invoice.status === "PENDING" &&
            moment(invoice.date).isBetween(fromDate, toDate)
          ) {
            return (
              <div>
                <div
                  key={invoice._id}
                  onClick={() => {
                    openInvoice(invoice);
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
                {optionInvoiceID === invoice._id ? (
                  <div className="home-all-invoice">
                    <InvoiceOption invoiceID={invoice._id} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          }
        })
      ) : (
        <div></div>
      )}
      <div className="home-all-invoice default-footer">
        <div>Total Amount</div>
        <div></div>
        <div>{countTotal}</div>
      </div>
      {/* <div className="open-invoice-box">Open Invoice</div> */}
    </div>
  );
}
