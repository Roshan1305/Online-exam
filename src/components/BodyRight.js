import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BodyRight.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loading from "./Loading";
import { useStateValue } from "./StateProvider";
import admin from "./admin";
import { actionTypes } from "./reducer";
import $ from "jquery";
function BodyRight() {
  const [{ user }, dispatch] = useStateValue("");

  let history = useHistory();

  const [email, setemail] = useState([]);
  const [name, setname] = useState([]);
  const [regno, setregno] = useState([]);
  // const { register, handleSubmit, errors } = useForm();
  const [err, seterr] = useState([""]);
  const [load, setload] = useState([""]);
  const [submit, setsubmit] = useState(false);

  // useEffect(() => {
  // const onError = errors =>{
  //     (errors.length!==0)?<p>no err</p>:<p>err</p>
  // }
  //   seterr(errors);
  //   console.log("hi");
  //   if (err.Email !== undefined) {
  //     console.log(err.Email.type);
  //   }
  // }, [errors, err]);
  const onValidate = (e) => {
    e.preventDefault();
    if (
      $("#email").val().includes("@sastra.ac.in") &&
      $("#regno").val().length == 9
    ) {
      setemail($("#email").val());
      setregno($("#regno").val());
      setname($("#name").val());
      onSubmit();
    } else if (
      !$("#email").val().includes("sastra.ac.in") &&
      $("#regno").val().length != 9
    ) {
      seterr("Enter Sastra Mail And Your Registration Number");
    } else if ($("#email").val() == "admin") {
      setemail($("#email").val());
      setregno($("#regno").val());
      setname($("#name").val());
      onSubmit();
      history.push("/admin");
    } else if ($("#regno").val().length != 9) {
      seterr("Enter Your Registration Number Correctly");
    } else if (!$("#email").val().includes("sastra.ac.in")) {
      seterr("Enter Sastra Mail");
    }
  };
  const onSubmit = () => {
    console.log(email);
    axios.post("https://fathomless-sands-42436.herokuapp.com/user", {
      email: email,
      name: name,
      reg: regno,
    });
    axios
      .post("https://fathomless-sands-42436.herokuapp.com/submitted", {
        email: email,
      })
      .then((res) => {
        if (!res.data && email != "admin") {
          history.push("/loading");
        } else if (res.data && email != "admin") {
          history.push("/submitted");
        }
      });

    dispatch({
      type: actionTypes.SET_USER,
      user: email,
    });
  };

  return (
    <div className="container1">
      <div className="content">
        <form onSubmit={onValidate}>
          <input
            id="name"
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Name"
            name="Name"
            // ref={register({ required: true, maxLength: 80 })}
          />
          <input
            id="email"
            onChange={(e) => setemail(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Email"
            name="Email"
            // ref={register({
            //   required: true,
            //   min: 22,
            //   maxLength: 22,
            //   pattern: /^\S+(@sastra.ac.in||admin)/i,
            // })}
          />
          <input
            onChange={(e) => setregno(e.target.value)}
            id="regno"
            type="text"
            className="form-control"
            placeholder="Registration Number"
            name="Registration"
            // ref={register({ required: true, maxLength: 9 })}
          />
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
          {err != "" ? <p> {err} </p> : <div></div>}
          {/* {err=="Sastra Mail"?(
            <p>Email err error</p>
          ) : (
            <div></div>
          )} 
          {err.Email !== undefined ? }
          {err.Registration !== undefined ? (
            <p>Regno {err.Registration.type} error</p>
          ) : (
            <div></div>
          )} */}
        </form>
      </div>
    </div>
  );
}

export default BodyRight;
