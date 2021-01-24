import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import dimensions from "./dimensions";
import "../CSS/HomeStyles.css";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Home() {
  const [count, setCount] = useState(0);
  const { height, width } = dimensions();

  const iconStyles = {
    color: "#1e3046",
    fontSize: "calc(1em + 1vmin)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="parent">
      <div className="left">
        <text className="titleTextLeft">ESPN Fantasy Basketball Tracker</text>
        <button className="button">First Time Activation/Sign Up</button>
        <div className="placeholder"></div>
      </div>
      <div className="right">
        <text className="titleTextRight">User Log In</text>
        <form>
          <div className="formContainer">
            <label for="email">
              <MailOutlineIcon style={iconStyles} />
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
              <LockOutlinedIcon style={iconStyles} />
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
              // placeholder="Password"
            ></div>
            <label for="remember" className="checkboxText">
              Remember Me
            </label>
          </div>
        </form>
        <div className="placeholder"></div>
      </div>
    </div>
  );
}

export default Home;
