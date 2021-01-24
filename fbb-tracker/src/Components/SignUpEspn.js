import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "../CSS/SignUpStyles.css";

function SignUpEspn() {
  return (
    <div className="parent2">
      <text className="titleText">User Sign Up</text>
      <div className="textCol">
        <text className="middleText">
          Several cookies from your ESPN account are needed for this step. This
          process only needs to be done once
        </text>
        <text className="middleText" style={{ paddingTop: "5vh" }}>
          Click the button below to log into your ESPN Fantasy Account
        </text>
      </div>
      <button className="button">ESPN Login</button>
      <div className="placeholder"></div>
    </div>
  );
}

export default withRouter(SignUpEspn);
