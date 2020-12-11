import React from "react";
import "./BodyLeft.css";

function BodyLeft() {
  return (
    <div className="container2">
      <h2>Instructions</h2>
      <p>Read it Carefully Before attending the Test</p>
      <div className="box">
        <ul>
          <li>
            Please complete the registration by assigned time, to take the EXAM
            during the Your Shift timing mentioned. Punctuality for an On-time
            Start is critical.
          </li>
          <li>
            You will NOT be ALLOWED to login to EXAM post the Start time
            mentioned.
          </li>
          <li>
            Type in login credentials in provided space where your Email Address
            is your COLLEGE Email Id and your college Registration Number.
          </li>
          <li>You wont be able to login with your personal email id.</li>
          <li>
            You will NOT be ALLOWED to login to EXAM post the Start time
            mentioned.
          </li>

          <li>Disable Your Anti Virus System.</li>

          <li>
            A verification code and a drive link will be send to your email.
          </li>

          <li>
            Go to the Drive Link and download the launcher and install it.
          </li>
          <li style={{ color: "red" }}>
            Don't try to attend the exam without installing the exe file as when
            the connection is not made your response WILL NOT BE TAKEN into
            consideration.
          </li>

          <li>
            Check the code and enter the code in the input.If you were not
            directed to the qpaper page then recheck your code again.
          </li>

          <li>Download the launcher applicable to your System OS.</li>
          <li>
            Do not Reload the page while attending the test.If you did by
            mistake You have to attend the test from the first by logging in and
            verifying.
          </li>
          <li>Press the Submit button after the completion of exam.</li>
          <li>You will be directed to the submitted page. </li>
          <li>
            You can uninstall the launcher after submitting the examination.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BodyLeft;
