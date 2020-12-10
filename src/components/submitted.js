import React from "react";
import Header from "./Header";
import "./submitted.css";

function Submitted() {
  return (
    <div>
      <Header />
      <div className="submit">
        <h2>Submitted</h2>
      </div>
      <div className="tag">
        <h6>You have Submitted the Assignment Successfully....</h6>
      </div>
      <hr />

      <form className="feedback"></form>

      <div className="instr3">
        <h4 className="examinstr">After Exam Instructions</h4>

        <div className="container3">
          <div className="box3">
            <ul>
              <li>
                After finishing the exam uninstall the installed exe file and
                enable your firewall and antivirus protections
              </li>
              <li>
                After submitting the test your response will be sent to your
                consent teacher and your answers will be evaluated
              </li>

              <li>You will receive a mail after 2 or 3 days with your marks</li>
              <li>No change can be done in your recorded response</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
