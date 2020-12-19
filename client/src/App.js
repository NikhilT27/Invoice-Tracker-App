import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="App">
      <header className="App-header">
        <h1>Invoice</h1>
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
      </header>
    </div>
  );
}

export default App;
