import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";

import ApprovedInvoice from "../components/ApprovedInvoice";
import PendingInvoices from "../components/PendingInvoices";
import ApprovedInvoiceAdmin from "../components/ApprovedInvoiceAdmin";
import PendingInvoiceAdmin from "../components/PendingInvoiceAdmin";

function Home() {
  const [user, setUser] = useState({});
  const [pendingClicked, setPendingClicked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken") != null) {
      setUser(jwtDecode(localStorage.getItem("authToken")));
      // console.log(jwtDecode(localStorage.getItem("authToken")));
      // console.log(user);
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("authToken");
    history.push("/");
  };

  return (
    <>
      <div className="home-box">
        <div className="home-title">
          <div className="home-username">
            <div className="home-username-ele">{`User: ${user.email}`}</div>
            <div className="home-username-ele">{` Id: ${user.id}`}</div>
          </div>
          <div className="home-logout">
            <button
              className="button-style"
              onClick={() => setPendingClicked(!pendingClicked)}
            >
              {pendingClicked ? "Invoices" : "Pending"}
              {/* Pending */}
            </button>
            <button
              className="button-style botton-style-dark "
              onClick={() => Logout()}
            >
              Logout
            </button>
          </div>
        </div>
        {user.email === "admin@gmail.com" ? (
          <div className="home-body">
            {pendingClicked ? (
              <PendingInvoiceAdmin />
            ) : (
              <ApprovedInvoiceAdmin />
            )}
          </div>
        ) : (
          <div className="home-body">
            {pendingClicked ? <PendingInvoices /> : <ApprovedInvoice />}
          </div>
        )}
      </div>
      <div className="add-invoice"></div>
    </>
  );
}

export default Home;
