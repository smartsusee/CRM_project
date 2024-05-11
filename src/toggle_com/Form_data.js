import React, { useState } from "react";
import "../style/Form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { post_data } from "../URL/url";

function Form_data() {
  const Navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Locations, setLocations] = useState("");
  const [DateToday, setDateToday] = useState("");
  const [checked, setchecked] = useState(false);

  // auto refresh

  const switch_home = (e) => {
    // console.log(e);
    axios
      .post(post_data, {
        Name,
        Age,
        MobileNo,
        Locations,
        DateToday,
        checked,
      })
      .then((res) => {
        console.log(res);
      });
    Navigate("/home");
    console.log(Name, Age, MobileNo, Locations, DateToday, checked);
  };
  return (
    <div>
      <div class="container">
        <div class="wrapper">
          <div class="company-info"></div>
          <div class="contact">
            <h3>Register Us</h3>
            <form>
              <p>
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  required
                  minLength={10}
                />
              </p>
              <p>
                <label>DateToday</label>
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                  onChange={(e) => {
                    setDateToday(e.target.value);
                  }}
                  required
                />
                {/* <input
                  type="datetime-local"
                  onChange={(e) => {
                    setDateToday(e.target.value);
                  }}
                  required
                /> */}
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
  );
}

export default Form_data;
