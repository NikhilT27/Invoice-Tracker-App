import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

export default function ApprovedInvoiceAdmin() {
  const [allInvoices, setAllInvoices] = useState([]);
  const [fromDate, setFromDate] = useState(
    moment("2000-01-01").format("YYYY-MM-DD")
  );

  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    getAllInvoices();
  }, []);

  async function getAllInvoices() {
    const allInvoices = await axios.get("/invoice/viewInvoices");
    if (allInvoices) {
      setAllInvoices(allInvoices.data);
      console.log(allInvoices.data);
    }
  }

  const getCount = () => {
    if (allInvoices.length > 0) {
      const result = allInvoices.filter(
        (invoice) =>
          invoice.status === "APPROVED" &&
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

  console.log(countTotal);
  return (
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
        <div className="invoice-user">Invoice User</div>
        <div className="invoice-name">Invoice Name</div>
        <div className="invoice-date">Invoice Date</div>
        <div className="invoice-amount">Invoice Amount</div>
      </div>
      {allInvoices.length > 0 ? (
        allInvoices.map((invoice) => {
          // console.log(invoice);
          if (
            invoice.status === "APPROVED" &&
            moment(invoice.date).isBetween(fromDate, toDate)
          ) {
            return (
              <div
                key={invoice._id}
                onClick={() => {
                  console.log(`clicked ${invoice._id}`);
                }}
                className="home-all-invoice"
              >
                <div className="invoice-user">{invoice.user}</div>
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
        <div></div>
      )}
      <div className="home-all-invoice default-footer">
        <div>Total Amount</div>
        <div></div>
        <div>{countTotal}</div>
      </div>
    </div>
  );
}
