import React, { useState } from "react";
import "./togglesidebar.scss";
import { useNavigate } from "react-router-dom";
import Form_data from "./toggle_com/Form_data";

function Toggle_data() {
  return (
    <>
      <div class="wrapper">
        <SideBar />
        <div id="content">
          {/* toggle icon */}
          <ToggleIcon />
          <h2 id="Register">Register Page</h2>
          <Form_data />
        </div>
      </div>
    </>
  );
}

function SideBar() {
  const Navigate = useNavigate();

  const switch_home = () => {
    console.log("hi");
    Navigate("/home");
  };

  return (
    <>
      <nav id="sidebar">
        <div
          class="sidebar-header"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <h4>logo</h4> */}
          <img
            src={require("./imgs/bg_img_logo.webp")}
            style={{
              width: "100px",
              borderRadius: "50%",
              height: "100px",
            }}
            alt=""
          />
        </div>

        <ul class="list-unstyled components">
          <p>DASHBOARD</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle text-center"
              style={{ textDecoration: "none" }}
            >
              Leads
            </a>
            <ul class="collapse list-unstyled  text-center" id="homeSubmenu">
              <li
                className="mt-2 navigate_btn"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Add
              </li>
              <li className="mt-2 navigate_btn" onClick={switch_home}>
                List
              </li>
              {/* <li className="mt-2">Home 3</li> */}
            </ul>
          </li>
          {/* <li>
            <a href="#">About</a>
          </li> */}
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle text-center"
              style={{ textDecoration: "none" }}
            >
              Pages
            </a>
            <ul class="collapse list-unstyled text-center" id="pageSubmenu">
              <li className="navigate_btn mt-2">Page 1</li>
              <li className="navigate_btn mt-2">Page 2</li>
            </ul>
          </li>
          {/* <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li> */}
        </ul>

        {/* <ul class="list-unstyled CTAs">
          <li>
            <a href="#" class="download">
              Download source
            </a>
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              class="article"
            >
              Back to article
            </a>
          </li>
        </ul> */}
      </nav>
    </>
  );
}

function ToggleIcon() {
  const Navigate = useNavigate();

  const Logout_fun = () => {
    localStorage.clear("auth");
    Navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn text-sidebar bg-turbo-yellow "
          >
            <i id="collapseIcon" class="fas fa-arrow-left"></i>
            <span></span>
          </button>
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-justify"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
            </ul> */}
            <div style={{ display: "flex" }}>
              <span
                onClick={() => {
                  Navigate("/uicomponent");
                }}
                className="Home"
              >
                {" "}
                Add Data
              </span>
              <h5
                onClick={() => {
                  Logout_fun();
                }}
                className="logout"
              >
                logout
              </h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Toggle_data, SideBar, ToggleIcon };
