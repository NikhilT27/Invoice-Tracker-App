import React, { useState } from "react";

import AddInvoice from "./AddInvoice";

export default function ApprovedInvoice({ userInvoices }) {
  const [addInvoiceOpen, setAddInvoiceOpen] = useState(false);
  const getCount = () => {
    if (userInvoices.length > 0) {
      const result = userInvoices.filter(
        (invoice) => invoice.status === "APPROVED"
      );
      return result.length;
    }
    return 0;
  };

  return (
    <div>
      {addInvoiceOpen ? (
        <AddInvoice />
      ) : (
        <div>
          <div>APPROVED/REJECTED INVOICES</div>
          <div className="home-number-invoices">{`Total number of invoices: ${getCount()}`}</div>
          <div className="home-all-invoice">
            <div>Invoice Name</div>
            <div>Invoice Date</div>
            <div>Invoice Amount</div>
          </div>
          {userInvoices.length > 0 ? (
            userInvoices.map((invoice) => {
              //   console.log(invoice);
              if (invoice.status != "PENDING") {
                return (
                  <div
                    key={invoice._id}
                    onClick={() => {
                      console.log(`clicked ${invoice._id}`);
                    }}
                    className="home-all-invoice"
                  >
                    <div>Invoice Name</div>
                    <div>Invoice Date</div>
                    <div>{invoice.amount}</div>
                  </div>
                );
              }
            })
          ) : (
            <div></div>
          )}
          <div className="home-all-invoice">
            <div>Total Amount</div>
            <div></div>
            <div>XX,XXX</div>
          </div>
        </div>
      )}

      <div
        className="float-add-button"
        onClick={() => setAddInvoiceOpen(!addInvoiceOpen)}
      >
        Add
      </div>
    </div>
  );
}
