import React, { useEffect, useState } from "react";
import { SideBar, ToggleIcon } from "../toggle_sidebar";
import axios from "axios";
import { update_data } from "../URL/url";
import { useNavigate } from "react-router-dom";

function Update() {
  const Navigate = useNavigate();

  const [Id, setId] = useState("");
  const [ref, setref] = useState(true);

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Locations, setLocations] = useState("");
  const [DateToday, setDateToday] = useState("");
  const [checked, setchecked] = useState(false);

  let switch_home = () => {
    axios
      .put(`${update_data}/${Id}`, {
        Name,
        Age,
        MobileNo,
        Locations,
        DateToday,
        checked,
      })
      .then((res) => {
        console.log(res);
        setref(!ref);
      });
    setName("");
    setAge("");
    setMobileNo("");
    setLocations("");
    setDateToday("");
    setchecked("");
    Navigate("/home");
  };
  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setMobileNo(localStorage.getItem("MobileNo"));
    setLocations(localStorage.getItem("Locations"));
    setDateToday(localStorage.getItem("DateToday"));
    setchecked(localStorage.getItem("checked"));
  }, []);
  return (
    <>
      <div class="wrapper">
        <SideBar />

        <div id="content">
          {/* toggle icon */}
          <ToggleIcon />

          <h2>Update Page</h2>

          <div class="container">
            <div class="wrapper">
              <div class="company-info"></div>
              <div class="contact">
                <h3>Update </h3>
                <form>
                  <p>
                    <label>Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={Name}
                      required
                    />
                  </p>
                  <p>
                    <label>Age</label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      value={Age}
                      required
                    />
                  </p>
                  <p>
                    <label>Phone</label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setMobileNo(e.target.value);
                      }}
                      value={MobileNo}
                      required
                    />
                  </p>
                  <p>
                    {/* <input
                      type="datetime-local"
                      onChange={(e) => {
                        setDateToday(e.target.value);
                      }}
                      value={DateToday}
                      required
                    /> */}
                    <label>DateToday</label>
                    <input
                      type="date"
                      name="dateofbirth"
                      id="dateofbirth"
                      onChange={(e) => {
                        setDateToday(e.target.value);
                      }}
                      value={DateToday}
                      required
                    />{" "}
                  </p>
                  <p>
                    <label>checked</label>

                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setchecked(!checked);
                      }}
                      placeholder="qwd"
                    />
                  </p>
                  <p class="full">
                    <label>Location</label>
                    <textarea
                      rows="5"
                      onChange={(e) => {
                        setLocations(e.target.value);
                      }}
                      value={Locations}
                      required
                    ></textarea>
                  </p>

                  <p class="full">
                    <button onClick={switch_home}>Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
