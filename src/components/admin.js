import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

import Answer from "./Answer";
import "./admin.css";
function Admin() {
  let history = useHistory();

  const [answers, setanswers] = useState([""]);
  const [{ user }, dispatch] = useStateValue();
  const [details, setdetails] = useState("");
  useEffect(() => {
    axios
      .get("https://fathomless-sands-42436.herokuapp.com/answer")
      .then((res) => setanswers(res.data));
  }, []);
  useEffect(() => {
    axios
      .post("https://fathomless-sands-42436.herokuapp.com/user-det", {
        em: user,
      })
      .then((res) => setdetails(res.data));
  }, [user]);
  return (
    <div>
      <Header />
      {/* <button
        className="but btn btn-primary"
        style={{ marginLeft: "40px" }}
        onClick={() => {
          history.push("/");
        }}
      >
        Logout
      </button> */}
      <h3 style={{ marginLeft: "8vh" }}>Student Responses</h3>
      <div className="adm">
        <div
          className="body2"
          style={{
            height: "fit-content",
            marginLeft: "10vh",
            display: "grid",
            gridGap: "10px",
            "grid-template-columns": "auto auto auto",
          }}
        >
          {answers != [""] ? (
            answers.map((answer) => (
              <Answer answer={answer} />
              // console.log(post)
            ))
          ) : (
            <div></div>
          )}
        </div>
        {details != [""] ? (
          <div className="details">
            <div className="dte">
              <div className="de1">
                <div className="de">Name</div>
                <div className="de">Email</div>
                <div className="de">RegNo</div>
                <div className="de">No of Answers</div>
              </div>
              <div className="de2" style={{ marginTop: "0.3vw" }}>
                <h6>{details.name}</h6>
                <h6>{user}</h6>
                <h6>{details.regno}</h6>
                <h6>{answers.length}</h6>
              </div>
            </div>
            <div className="instr4">
              <h4 style={{ textAlign: "center" }}>Evaluation Instructions</h4>

              <div className="container4">
                <div className="box4">
                  <ul>
                    <li>
                      You can see Answer sheets assigned to you as per the below
                      screen.
                    </li>
                    <li>You can click on the Check Answer sheet.</li>
                    <li>
                      You can see an actual copy of the answer sheet with
                      details like Registration Number.
                    </li>

                    {/* <li>
                      You wont be able to login with your personal email id
                    </li>
                    <li>
                      You will be DIRECTED to a Google drive page where you have
                      to download the Launcher
                    </li>
                    <li>
                      You will NOT be ALLOWED to login to EXAM post the Start
                      time mentioned
                    </li>

                    <li>Download the launcher applicable to your System OS.</li>
                    <li>
                      Type in login credentials in provided space where your
                      Email Address is your COLLEGE Email Id and your college
                      Registration Number
                    </li>
                    <li>
                      Type in login credentials in provided space where your
                      Email Address is your COLLEGE Email Id and your college
                      Registration Number
                    </li>
                    <li>
                      Type in login credentials in provided space where your
                      Email Address is your COLLEGE Email Id and your college
                      Registration Number
                    </li>
                    <li>
                      Type in login credentials in provided space where your
                      Email Address is your COLLEGE Email Id and your college
                      Registration Number
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Admin;
