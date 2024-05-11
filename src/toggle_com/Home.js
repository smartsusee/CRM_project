import React, { useEffect, useState } from "react";
import { SideBar, ToggleIcon } from "../toggle_sidebar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../style/home.css";
import { Delete_data, Get_data } from "../URL/url";
import { useNavigate } from "react-router-dom";
function Home() {
  const Navigate = useNavigate();
  const [viewData, setViewData] = useState([]);
  const [ref, setref] = useState(true);
  const [value, setvalue] = useState("");
  // leads data view
  let callgetapi = async () => {
    let resp = await axios.get(Get_data);

    console.log(resp.data);
    setViewData(resp.data);
  };
  useEffect(() => {
    callgetapi();
  }, [ref]);

  let del = (v) => {
    console.log(v._id);
    axios.delete(`${Delete_data}/${v._id}`).then((res) => {
      setref(!ref);
      callgetapi();
      console.log(res);
    });
  };

  const updatedata = (v) => {
    console.log(v);
    localStorage.setItem("Id", v._id);
    localStorage.setItem("Name", v.Name);
    localStorage.setItem("Age", v.Age);
    localStorage.setItem("MobileNo", v.MobileNo);
    localStorage.setItem("Locations", v.Locations);
    localStorage.setItem("DateToday", v.DateToday);
    localStorage.setItem("checked", v.checked);
    Navigate("/update");
  };
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = viewData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(viewData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(numbers);

  function prepage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextpage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  localStorage.setItem("records", JSON.stringify(records));

  let datasre = JSON.parse(localStorage.getItem("records"));
  console.log(datasre);
  return (
    <>
      <div class="wrapper">
        <SideBar />

        <div id="content">
          {/* toggle icon */}
          <ToggleIcon />

          <h2>Read Page</h2>

          <Table responsive="lg" className="animated bounceInLeft">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>MobileNo</th>
                <th>Locations</th>
                <th>DateToday</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records &&
                records.map((v, i) => {
                  i += 1;
                  return (
                    <tr>
                      <td>{i}</td>
                      <td>{v.Name}</td>
                      <td>{v.Age}</td>
                      <td>{v.MobileNo}</td>
                      <td>{v.Locations}</td>
                      <td>{v.DateToday}</td>
                      <td className="">
                        <i
                          class="fa-solid fa-minus"
                          style={{ fontSize: "25px", marginLeft: "12px" }}
                          onClick={() => {
                            Navigate("/Status");
                          }}
                        ></i>
                      </td>

                      <td className="">
                        <button
                          className="px-1 bg-success text-white"
                          onClick={() => {
                            updatedata(v);
                          }}
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          className="px-1 bg-danger text-white"
                          style={{ marginLeft: "-30px" }}
                          onClick={() => {
                            del(v);
                          }}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <div id="pagenation-section">
            <nav className="animated bounceInLeft">
              <ul className="pagenation page-flex">
                <li className="page-item border border-1 p-1 bg-warning">
                  <span href="#" className="page-link" onClick={prepage}>
                    prev
                  </span>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item  ${
                      currentPage === n ? "activedata" : ""
                    }`}
                    key={i}
                  >
                    <span onClick={() => changeCPage(n)}>{n}</span>
                  </li>
                ))}
                <li className="page-item border border-1 p-1 bg-warning">
                  <span className="page-link" onClick={nextpage}>
                    next
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <h1>invoice</h1>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setvalue(e.target.value);
            }}
          >
            {/* https://www.youtube.com/watch?v=u-m0XINQUyY */}
            {records.map((option, i) => {
              console.log(option);
              return (
                <option
                  value={`${option.Age},${option.Locations} ${option.MobileNo}`}
                >
                  {option.Name}
                </option>
              );
            })}
          </select>
          <p style={{ color: "black" }}>{value}</p>
          <div>
            {datasre.map((v) => {
              console.log(v.Name);
              const { Name } = v;
              return (
                <>
                  <p>{Name}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
