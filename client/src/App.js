import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data: fet } = await axios.get("/invoice/viewInvoices");
  //     if (fet) {
  //       setData(fet);
  //       console.log(fet);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <Router>
      <div className="App">
        {/* {data &&
          data.map((invoice) => {
            return (
              <div key={invoice._id}>
              <div>
              <h2>{invoice.email}</h2>
              </div>
              </div>
              );
            })} */}
        <div className="header-navbar">
          <div className="app-title">Invoice Tracker</div>
        </div>
        <Route exact path="/" component={User} />
      </div>
    </Router>
  );
}

export default App;
