import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
function PrivateRoute({ children, ...rest }) {
  const { Auth } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
