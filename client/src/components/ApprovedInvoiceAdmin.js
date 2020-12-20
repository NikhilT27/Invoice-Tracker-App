import React from "react";

export default function ApprovedInvoiceAdmin({ allInvoices }) {
  const getCount = () => {
    if (allInvoices.length > 0) {
      const result = allInvoices.filter(
        (invoice) => invoice.status === "APPROVED"
      );
      return result.length;
    }
    return 0;
  };

  return (
    <div>
      <div>APPROVED/REJECTED INVOICES</div>
      <div className="home-number-invoices">{`Total number of invoices: ${getCount()}`}</div>
      <div className="home-all-invoice">
        <div>Invoice Name</div>
        <div>Invoice Date</div>
        <div>Invoice Amount</div>
      </div>
      {allInvoices.length > 0 ? (
        allInvoices.map((invoice) => {
          //   console.log(invoice);
          if (invoice.status === "APPROVED") {
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
  );
}
