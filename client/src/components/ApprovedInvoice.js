import React from "react";

export default function ApprovedInvoice({ userInvoices }) {
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
  );
}
