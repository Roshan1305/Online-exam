import React, { useEffect, useState } from "react";
import "./Loading.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Loading() {
  const [{ user }, dispatch] = useStateValue();
  const [rend, setrend] = useState("");
  const [noinput, setnoinput] = useState("");
  const history = useHistory();
  const [verify, setverify] = useState("");
  //   useEffect(() => {
  //     axios.get("http://localhost:9000/submitted").then((res) => {
  //       // eslint-disable-next-line no-unused-expressions
  //       // eslint-disable-next-line no-restricted-globals
  //       res.data ? history.push("/qpaper") : setrend(false);
  //     });
  //     console.log(user);
  //   }, [user]);
  const handleProceed = (e) => {
    e.preventDefault();
    axios
      .post("https://fathomless-sands-42436.herokuapp.com/verify", {
        em: user,
        code: noinput,
      })
      .then((res) => {
        console.log(res.data);
        // eslint-disable-next-line no-restricted-globals
        res.data ? history.push("/qpaper") : setverify("false");
      });
  };

  return (
    <div className="bodyver">
      <h5 className="heading">
        Please Check your Email and Enter The Verification Code.
      </h5>
      <div className="center">
        <div className="lds-hourglass"></div>
      </div>
      <div className="input" style={{ marginLeft: "21%", paddingTop: "5vh" }}>
        <input
          style={{ border: "1px solid black", margin: "2px" }}
          className="ip"
          type="text"
          onChange={(e) => setnoinput(e.target.value)}
        />
        {noinput.length == 6 ? (
          <Link to="/qpaper">
            <button onClick={handleProceed} className="btn btn-primary">
              Proceed
            </button>
          </Link>
        ) : (
          <button className="btn btn-primary" disabled>
            Proceed
          </button>
        )}
      </div>
      <div className="refresh">
        Please recheck your Code again if not logged in
      </div>
    </div>
  );
}

export default Loading;
