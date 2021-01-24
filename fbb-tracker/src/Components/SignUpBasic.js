import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "../CSS/SignUpStyles.css";

import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function SignUpBasic() {
  const history = useHistory();
  const styles = {
    iconStyles: {
      color: "#e5891d",
      fontSize: "calc(1em + 1vmin)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="parent2">
      <text className="titleText">User Sign Up</text>
      <form>
        <div className="formContainer2">
          <label for="email">
            <FaceOutlinedIcon style={styles.iconStyles} />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="inputStyle2"
            placeholder="Name"
          />
        </div>
        <div className="formContainer2" style={{ paddingTop: "5vh" }}>
          <label for="email">
            <MailOutlineIcon style={styles.iconStyles} />
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="inputStyle2"
            placeholder="Email"
          />
        </div>
        <div className="formContainer2" style={{ paddingTop: "5vh" }}>
          <label for="password">
            <LockOutlinedIcon style={styles.iconStyles} />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inputStyle2"
            placeholder="Password"
          />
        </div>
      </form>
      <button className="button" onClick={() => history.push("/signup/espn")}>
        Next
      </button>
      <div className="placeholder"></div>
    </div>
  );
}

export default withRouter(SignUpBasic);
