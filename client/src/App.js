import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Home from "./pages/Home";
import User from "./pages/User";
import AuthRoute from "./util/AuthRoute";

function App() {
  const user = "true";
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
        {/* <Route exact path="/Home" component={Home} /> */}
        <Route exact path="/Home">
          {user ? <Home /> : <Redirect to="/" />}
        </Route>

        {/* <AuthRoute exact path="/Home" component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;
