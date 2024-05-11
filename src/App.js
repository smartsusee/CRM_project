import React from "react";
import { Toggle_data } from "./toggle_sidebar";
import Home from "./toggle_com/Home";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./untils/PrivateRoutes";
import Login from "./register/Login";
import Update from "./toggle_com/Update";
import Status from "./toggle_com/Status";
import RegisterForm from "./register/RegisterForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/uicomponent" element={<Toggle_data />} exact />

            <Route path="/" element={<RegisterForm />} exact />

            <Route element={<Home />} path="/home" />
            <Route path="/update" element={<Update />} />
            <Route path="/Status" element={<Status />} />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>

      {/* <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Toggle_data />} path="/" exact />
              <Route element={<Update />} path="/update" />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </Router>
      </div> */}
    </>
  );
}

export default App;
