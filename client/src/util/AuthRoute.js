import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

function AuthRoute({ component: Component, ...rest }) {
  //   useEffect(() => {
  //     if (localStorage.getItem("authToken")) {
  //       localStorage.removeItem("authToken");
  //     }
  //   }, []);
  const [user, setUser] = useState({});
  if (localStorage.getItem("authToken") != null) {
    setUser(jwtDecode(localStorage.getItem("authToken")));
    console.log(user);
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/Home" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
