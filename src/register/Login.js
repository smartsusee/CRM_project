import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Login.scss";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [regmsg, setregmsg] = useState("");

  const Navigate = useNavigate();

  let handledata = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4005/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log(res.data);
        setregmsg(res.data);

        setTimeout(() => {
          setregmsg("");
        }, 2000);
        Navigate("/uicomponent");
      })
      .catch((err) => {
        setregmsg(err.response.data);
        setTimeout(() => {
          setregmsg("");
        }, 2000);
        console.log(err.response.data);
      });
  };
  return (
    <>
      {/* <div>
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

      <div id="animated_login">
        <form>
          <div class="box">
            <span class="box__borderline"></span>

            <div class="form" action="#">
              <h2 class="form__title">Sign in</h2>

              <div class="form__box">
                <input
                  autoComplete="new-password"
                  class="form__input"
                  type="email"
                  required="required"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <span class="form__span">Email</span>
                <i class="form__line"></i>
              </div>

              <div class="form__box">
                <input
                  autoComplete="new-password"
                  class="form__input"
                  type="password"
                  required="required"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <span class="form__span">Password</span>
                <i class="form__line"></i>
              </div>

              <div class="form__links">
                <a class="form__link" href="#">
                  <h1 style={{ fontSize: "10px" }}>{regmsg}</h1>
                </a>
                <p
                  class="form__link"
                  href="#"
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  Signup
                </p>
              </div>
              {/* <input class="form__submit" type="submit" value="Login" /> */}
              <button class="form__submit glow-on-hover" onClick={handledata}>
                click
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

// function Log() {
//   return (
//     <>

//     </>
//   );
// }

export default Login;
