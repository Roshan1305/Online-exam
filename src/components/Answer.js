import React, { useState } from "react";
import "./Answer.css";
export default function Answer({ answer }) {
  const [show, setshow] = useState(false);
  return (
    <div className="adminans">
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
          <div className="answer">{answer.answer1}</div>
          <div className="answer">{answer.answer2}</div>
          <div className="answer">{answer.answer3}</div>
          <div className="answer">{answer.answer4}</div>
          <div className="answer">{answer.answer5}</div>
          <div className="answer">{answer.answer6}</div>
          <div className="answer">{answer.answer7}</div>
          <div className="answer">{answer.answer8}</div>
          <div className="answer">{answer.answer9}</div>
          <div className="answer">{answer.answer10}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
