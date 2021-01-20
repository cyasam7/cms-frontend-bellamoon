import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/materia/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initialAxios } from "./Helper/AuthHelper";
import { AuthContext } from "./Context/AuthContext";

initialAxios();

ReactDOM.render(
  <AuthContext>
    <App />
  </AuthContext>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
