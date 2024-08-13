import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../css/Form_data.css";
import "../style/regster.scss";

function RegisterForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [regmsg, setregmsg] = useState("");
  const Navigate = useNavigate();

  const handledata = (e) => {
    axios
      .post("http://localhost:4005/create", { name, email, password })
      .then((res) => {
        console.log(res.data.msg);
        setTimeout(() => {
          setregmsg("");
        }, 2000);
        setregmsg(res.data.msg);

        if (res.data.msg === "email already exists") {
          Navigate("/");
        } else {
          setname("");
          setemail("");
          setpassword("");
          Navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  // useEffect(() => {
  //   axios.get("http://localhost:4003/api/getdataAll").then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <>
      <h1>{regmsg}</h1>
      {/* <div>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <br />

        <label>email:</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />

        <label>password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <br />

        <button
          onClick={() => {
            handledata();
          }}
        >
          click
        </button>
      </div> */}

      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div class="row clearfix">
            <div class="input_field">
              {" "}
              <span>
                <i aria-hidden="true" class="fa fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                autoComplete="new-password"
                onChange={(e) => {
                  setname(e.target.value);

                  console.log(e.target.value);
                }}
              />
            </div>

            <div class="input_field">
              {" "}
              <span>
                <i aria-hidden="true" class="fa fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                autoComplete="new-password"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div class="input_field">
              {" "}
              <span>
                <i aria-hidden="true" class="fa fa-lock"></i>
              </span>
              <input
                autoComplete="new-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            {/* <div class="input_field">
              {" "}
              <span>
                <i aria-hidden="true" class="fa fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Re-type Password"
                required
              />
            </div> */}
            {/* <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input type="text" name="name" placeholder="First Name" />
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div> */}
            {/* <div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1" />
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2" />
              <label for="rd2">Female</label>
            </div> */}
            {/* <div class="input_field select_option">
              <select>
                <option>Select a country</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div class="select_arrow"></div>
            </div> */}
            {/* <div class="input_field checkbox_option">
              <input type="checkbox" id="cb1" />
              <label for="cb1">I agree with terms and conditions</label>
            </div> */}
            <div class="input_field">
              <label
                style={{
                  fontSize: "15px",
                  fontFamily: "revert-layer",
                  borderBottom: "1px solid black",
                }}
                onClick={() => {
                  Navigate("/login");
                }}
              >
                Sign In
              </label>
            </div>
            {/* <input class="button" type="submit" value="Register" /> */}
          </div>
        </div>
        <button
          onClick={() => {
            handledata();
          }}
          className="px-2"
        >
          click
        </button>
      </div>
    </>
  );
}

export default RegisterForm;
