import React from "react";
import { Toggle_data } from "./toggle_sidebar";
import Home from "./toggle_com/Home";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./untils/PrivateRoutes";
import Login from "./register/Login";
import Status from "./toggle_com/Status";
import RegisterForm from "./register/RegisterForm";
import ReadData from "./toggle_com/ReadData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/uicomponent" element={<Toggle_data />} exact />

            <Route path="/" element={<RegisterForm />} exact />

            <Route element={<ReadData />} path="/home" />
            <Route path="/Status" element={<Status />} />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
