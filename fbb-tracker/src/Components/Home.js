import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import dimensions from "../Helpers/dimensions";
import "../CSS/HomeStyles.css";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";

function Home() {
  const [check, setCheck] = useState(false);
  const { height, width } = dimensions();
  const history = useHistory();

  const styles = {
    iconStyles: {
      color: "#1e3046",
      fontSize: "calc(1em + 1vmin)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkIcon: {
      color: "#1e3046",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "calc(0.8em + 0.8vmin)",
    },
  };

  return (
    <div className="parent">
      <div className="left">
        <text className="titleTextLeft">ESPN Fantasy Basketball Tracker</text>
        <button
          className="button"
          onClick={() => history.push("/signup/basic")}
        >
          First Time Activation/Sign Up
        </button>
        <div className="placeholder"></div>
      </div>
      <div className="right">
        <text className="titleTextRight">User Log In</text>
        <form>
          <div className="formContainer">
            <label for="email">
              <MailOutlineIcon style={styles.iconStyles} />
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="inputStyle"
              placeholder="Email"
            />
          </div>
          <div className="formContainer" style={{ paddingTop: "5vh" }}>
            <label for="password">
              <LockOutlinedIcon style={styles.iconStyles} />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="inputStyle"
              placeholder="Password"
            />
          </div>
          <div className="checkboxContainer" style={{ paddingTop: "5vh" }}>
            <div
              type="checkbox"
              id="remember"
              name="remember"
              className="checkboxStyle"
              onClick={() => setCheck(!check)}
              // placeholder="Password"
            >
              {check && <CheckOutlinedIcon style={styles.checkIcon} />}
            </div>
            <label for="remember" className="checkboxText">
              Remember Me
            </label>
          </div>
        </form>
        <div className="bottomCol">
          <button className="button">Login</button>
          <text className="forgotText">Forgot Password?</text>
        </div>
        <div className="placeholder"></div>
      </div>
    </div>
  );
}

export default withRouter(Home);
