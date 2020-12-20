import React, { useState } from "react";

import InvoiceOptionAdmin from "../components/InvoiceOptionAdmin";

export default function PendingInvoiceAdmin({ allInvoices }) {
  const [optionInvoiceID, setOptionInvoiceID] = useState("");
  const getCount = () => {
    if (allInvoices.length > 0) {
      const result = allInvoices.filter(
        (invoice) => invoice.status === "PENDING"
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
  return (
    <div>
      <div>PENDING INVOICES</div>
      <div className="home-number-invoices">{`Total number of invoices: ${getCount()} `}</div>
      <div className="home-all-invoice">
        <div>Invoice Name</div>
        <div>Invoice Date</div>
        <div>Invoice Amount</div>
      </div>
      {allInvoices.length > 0 ? (
        allInvoices.map((invoice) => {
          //   console.log(invoice);
          if (invoice.status === "PENDING") {
            return (
              <div key={invoice._id}>
                <div
                  key={invoice._id}
                  onClick={() => {
                    openInvoice(invoice);
                  }}
                  className="home-all-invoice"
                >
                  <div>Invoice Name</div>
                  <div>Invoice Date</div>
                  <div>{invoice.amount}</div>
                </div>
                {optionInvoiceID === invoice._id ? (
                  <div className="home-all-invoice">
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
        <div></div>
      )}
      <div className="home-all-invoice">
        <div>Total Amount</div>
        <div></div>
        <div>XX,XXX</div>
      </div>
      {/* <div className="open-invoice-box">Open Invoice</div> */}
    </div>
  );
}
