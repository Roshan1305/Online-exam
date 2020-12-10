import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import "./qpaper.css";
//import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { actionTypes } from "./reducer";
import { makeStyles } from "@material-ui/core/styles";
//import Countdown from "react-countdown";
function Qpaper() {
  const [{ user }, dispatch] = useStateValue();
  let history = useHistory();

  const [det, setdet] = useState([]);
  useEffect(() => {
    axios
      .post("https://fathomless-sands-42436.herokuapp.com/user-det", {
        em: user,
      })
      .then((res) => {
        setdet(res.data);
        if (!res.data.isVerified) {
          history.push("/");
        }
      });
  }, [user]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      marginTop: "0vh",
      marginLeft: "1.8vw",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  }));
  const [timeup, settimeup] = useState(false);
  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");
  const [answer3, setanswer3] = useState("");
  const [answer4, setanswer4] = useState("");
  const [answer5, setanswer5] = useState("");
  const [answer6, setanswer6] = useState("");
  const [answer7, setanswer7] = useState("");
  const [answer8, setanswer8] = useState("");
  const [answer9, setanswer9] = useState("");
  const [answer10, setanswer10] = useState("");
  //console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SUBMIT,
      submit: true,
    });

    axios.post("https://fathomless-sands-42436.herokuapp.com/getanswer", {
      answero1: answer1,
      answero2: answer2,
      answero3: answer3,
      answero4: answer4,
      answero5: answer5,
      answero6: answer6,
      answero7: answer7,
      answero8: answer8,
      answero9: answer9,
      answero10: answer10,
      em: user,
    });
    history.push("/submitted");
  };

  //   useEffect(() => {
  //     axios.get("http://localhost:9000/submitted").then((res) => {
  //       // eslint-disable-next-line no-unused-expressions
  //       res.data ? history.push("/submitted") : setrend(true);
  //     });
  //     console.log(user);
  //   }, [user]);

  useEffect(() => {
    axios
      .post("https://fathomless-sands-42436.herokuapp.com/submitted", {
        email: user,
      })
      .then((res) => {
        if (res.data) {
          history.push("/submitted");
        }
      });
  }, [user]);
  const Completionist = () => <span>You are Time got ended!</span>;
  const classes = useStyles();
  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //         if (completed) {
  //             dispatch({
  //                 type:actionTypes.SET_SUBMIT,
  //                 submit:true
  //             })

  //             history.push("/submitted")
  //           return <Completionist />;
  //         } else {
  //           // Render a countdown
  //           return <span>{hours}:{minutes}:{seconds}</span>;
  //         }
  //       };
  return (
    <div className="total">
      <Header />
      {/* <Countdown date={Date.now() + 3600000} /> */}
      <div className="qbody">
        {/* <div className="right">
          <div className="count">
            <div className={classes.root} id="avatar">
              <Avatar className={classes.large} src="/broken-image.jpg" />
            </div>
            <div className="cont">
              <div className="de1">
                <div className="de">Name</div>
                <div className="de">Email</div>
                <div className="de">RegNo</div>
              </div>
              <div className="de2" style={{ marginTop: "0.3vw" }}>
                <h6>{det.name}</h6>
                <h6>{user}</h6>
                <h6>{det.regno}</h6>
              </div>
            </div>
          </div>
        </div> */}
        <div className="left1">
          <div className="qpbody">
            <div className="count">
              <div className="cont">
                <div className="de1">
                  <div className="de">Name</div>
                  <div className="de">Email</div>
                  <div className="de">RegNo</div>
                </div>
                <div className="de2" style={{ marginTop: "0.3vw" }}>
                  <h6>{det.name}</h6>
                  <h6>{user}</h6>
                  <h6>{det.regno}</h6>
                </div>
              </div>
            </div>
            <form id="topf" className="form" onSubmit={handleSubmit}>
              <label>
                1.What do you mean by Network?{" "}
                <div>
                  <textarea
                    rows={7}
                    placeholder="Enter your answer"
                    onChange={(e) => setanswer1(e.target.value)}
                    name="answer1"
                    required
                  />
                </div>
              </label>
              <div>
                <label>
                  2.Explain the Different layers of the OSI model. .
                  <div>
                    <textarea
                      rows={7}
                      placeholder="Enter your answer"
                      onChange={(e) => setanswer2(e.target.value)}
                      name="answer2"
                      required
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  3.Describe Hub, Switch and Router?{" "}
                  <div>
                    <textarea
                      rows={7}
                      placeholder="Enter your answer"
                      onChange={(e) => setanswer3(e.target.value)}
                      name="answer3"
                      required
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  4.Which is not a application layer protocol?
                  <div>
                    <form onChange={(e) => setanswer4(e.target.value)}>
                      <input type="radio" value="HTTP" name="gender" /> HTTP
                      <br />
                      <input type="radio" value="SMTP" name="gender" /> SMTP
                      <br />
                      <input type="radio" value="FTP" name="gender" /> FTP
                      <br />
                      <input type="radio" value="TCP" name="gender" /> TCP
                      <br />
                    </form>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  5.The packet of information at the application layer is called
                  __________
                  <div>
                    <form onChange={(e) => setanswer5(e.target.value)}>
                      <input type="radio" value="Packet" name="gender" /> Packet
                      <br />
                      <input type="radio" value="Message" name="gender" />{" "}
                      Message
                      <br />
                      <input type="radio" value="Segment" name="gender" />{" "}
                      Segment
                      <br />
                      <input type="radio" value="Frame" name="gender" /> Frame
                      <br />
                    </form>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  6.Application layer offers _______ service.
                  <div>
                    <form onChange={(e) => setanswer6(e.target.value)}>
                      <input type="radio" value="End to End" name="gender" />{" "}
                      Packet
                      <br />
                      <input
                        type="radio"
                        value="Process to Process"
                        name="gender"
                      />{" "}
                      Message
                      <br />
                      <input
                        type="radio"
                        value=" Both End to end and Process to process"
                        name="gender"
                      />{" "}
                      Both End to end and Process to process
                      <br />
                      <input
                        type="radio"
                        value="None of the mentioned"
                        name="gender"
                      />{" "}
                      None of the mentioned
                      <br />
                    </form>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  7.Which of the following is an application layer service?
                  <div>
                    <form onChange={(e) => setanswer7(e.target.value)}>
                      <input
                        type="radio"
                        value=" Network virtual terminal"
                        name="gender"
                      />{" "}
                      Network virtual terminal
                      <br />
                      <input
                        type="radio"
                        value="File transfer, access, and management"
                        name="gender"
                      />{" "}
                      File transfer, access, and management
                      <br />
                      <input
                        type="radio"
                        value="Mail service"
                        name="gender"
                      />{" "}
                      Mail service
                      <br />
                      <input
                        type="radio"
                        value=" All of the mentioned"
                        name="gender"
                      />{" "}
                      All of the mentioned
                      <br />
                    </form>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  8.Electronic mail uses which Application layer protocol?{" "}
                  <div>
                    <form onChange={(e) => setanswer8(e.target.value)}>
                      <input type="radio" value="SMTP" name="gender" /> SMTP
                      <br />
                      <input type="radio" value="HTTP" name="gender" /> HTTP
                      <br />
                      <input type="radio" value="FTP" name="gender" /> FTP
                      <br />
                      <input type="radio" value="SIP" name="gender" /> SIP
                      <br />
                    </form>
                  </div>
                </label>
              </div>
              <div>
                <label>
                  9.What is the OSI model?
                  <div>
                    <textarea
                      rows={7}
                      placeholder="Enter your answer"
                      onChange={(e) => setanswer9(e.target.value)}
                      name="answer2"
                      required
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  10.What do you mean by HTTP?{" "}
                  <div>
                    <textarea
                      rows={7}
                      placeholder="Enter your answer"
                      onChange={(e) => setanswer10(e.target.value)}
                      name="answer2"
                      required
                    />
                  </div>
                </label>
              </div>
              <button className="button" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qpaper;
