import React, { useState } from "react";
import "./Answer.css";
export default function Answer({ answer }) {
  const [show, setshow] = useState(false);
  return (
    <div
      className="adminans"
      style={{ outlineWidth: "0", marginBottom: "10px" }}
    >
      <button
        className="btn btn-primary"
        style={{ outlineWidth: "0" }}
        onClick={() => {
          setshow(!show);
        }}
      >
        {answer.email}
      </button>
      {show ? (
        <div>
          <div className="answer">1.{answer.answer1}</div>
          <div className="answer">2.{answer.answer2}</div>
          <div className="answer">3.{answer.answer3}</div>
          <div className="answer">4.{answer.answer4}</div>
          <div className="answer">5.{answer.answer5}</div>
          <div className="answer">6.{answer.answer6}</div>
          <div className="answer">7.{answer.answer7}</div>
          <div className="answer">8.{answer.answer8}</div>
          <div className="answer">9.{answer.answer9}</div>
          <div className="answer">10.{answer.answer10}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
