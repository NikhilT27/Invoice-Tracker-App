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
  const [allInvoices, setAllInvoices] = useState({});
  const [userInvoices, setUserInvoices] = useState({});
  const [countInvoices, setCountInvoices] = useState(0);
  const [pendingClicked, setPendingClicked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken") != null) {
      setUser(jwtDecode(localStorage.getItem("authToken")));
      // console.log(jwtDecode(localStorage.getItem("authToken")));
      // console.log(user);
      if (user) {
        getAllInvoices();
        getUserInvoices();
      }
    }
  }, []);

  async function getAllInvoices() {
    const allInvoices = await axios.get("/invoice/viewInvoices");
    if (allInvoices) {
      setAllInvoices(allInvoices.data);
      console.log(allInvoices.data);
    }
  }

  async function getUserInvoices() {
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
      setUserInvoices(result.data);
      // console.log(result.data);
    }
  }

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
              <PendingInvoiceAdmin allInvoices={allInvoices} />
            ) : (
              <ApprovedInvoiceAdmin allInvoices={allInvoices} />
            )}
          </div>
        ) : (
          <div className="home-body">
            {pendingClicked ? (
              <PendingInvoices userInvoices={userInvoices} />
            ) : (
              <ApprovedInvoice userInvoices={userInvoices} />
            )}
          </div>
        )}
      </div>
      <div className="add-invoice"></div>
    </>
  );
}

export default Home;
