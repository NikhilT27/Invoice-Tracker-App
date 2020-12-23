import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import InvoiceOptionAdmin from "../components/InvoiceOptionAdmin";

export default function PendingInvoiceAdmin() {
  const [allInvoices, setAllInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [fromDate, setFromDate] = useState(
    moment("2000-01-01").format("YYYY-MM-DD")
  );

  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [optionInvoiceID, setOptionInvoiceID] = useState("");

  useEffect(() => {
    getAllInvoices();
  }, []);
  async function getAllInvoices() {
    setLoading(true);
    const allInvoices = await axios.get("/invoice/viewInvoices");
    if (allInvoices) {
      setLoading(false);

      setAllInvoices(allInvoices.data);
      console.log(allInvoices.data);
    }
    return setLoading(false);
  }

  const getCount = () => {
    if (allInvoices.length > 0) {
      const result = allInvoices.filter(
        (invoice) =>
          invoice.status === "PENDING" &&
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

  const openInvoice = (invoice) => {
    console.log(`clicked ${invoice._id}`);
    if (optionInvoiceID === "") {
      setOptionInvoiceID(invoice._id);
    } else {
      setOptionInvoiceID("");
    }
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
        <div className="invoice-user">Invoice User</div>
        <div className="invoice-name">Invoice Name</div>
        <div className="invoice-date">Invoice Date</div>
        <div className="invoice-amount">Invoice Amount</div>
      </div>
      {loading ? (
        <div className="loader-div">
          <div className="loader-invoice"></div>
        </div>
      ) : allInvoices.length > 0 ? (
        allInvoices.map((invoice) => {
          //   console.log(invoice);
          if (
            invoice.status === "PENDING" &&
            moment(invoice.date).isBetween(
              fromDate,
              moment(toDate).add(1, "d").format("YYYY-MM-DD"),
              undefined,
              "[]"
            )
          ) {
            return (
              <div key={invoice._id}>
                <div
                  key={invoice._id}
                  onClick={() => {
                    openInvoice(invoice);
                  }}
                  className="home-all-invoice"
                >
                  <div className="invoice-user">{invoice.user}</div>
                  <div className="invoice-name">{invoice.name}</div>
                  <div className="invoice-date">
                    {moment(invoice.date).format("DD-MM-YY")}
                  </div>
                  <div className="invoice-amount">{invoice.amount}</div>
                  {optionInvoiceID === invoice._id ? (
                    <div className="extend-collapse">-</div>
                  ) : (
                    <div className="extend-collapse">+</div>
                  )}
                  {addThisOne(invoice.amount)}
                </div>
                {optionInvoiceID === invoice._id ? (
                  <div className="home-all-invoice admin-option-wide">
                    <InvoiceOptionAdmin invoiceID={invoice._id} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          }
        })
      ) : (
        <div className="empty-invoices">Empty Pending Invoices !!</div>
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
