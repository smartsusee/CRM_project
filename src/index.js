import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { DarkModeContextProvider } from "./context/darkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./toggle_page/Home";

ReactDOM.render(
  <React.StrictMode>
    {/* <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider> */}

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
