import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="head">
      <div className="left">
        {/* <img className="logo" src={require("./logo.png")} alt="Logo"/> */}
        <h1 className="name">Semester Examination</h1>
      </div>
    </div>
  );
}

export default Header;
