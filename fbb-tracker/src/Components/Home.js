import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import dimensions from "./dimensions";
import "../CSS/HomeStyles.css";

function Home() {
  const [count, setCount] = useState(0);
  const { height, width } = dimensions();

  return (
    <div className="parent">
      <div className="left">
        <text className="titleTextLeft">ESPN Fantasy Basketball Tracker</text>
        <button className="button">First Time Activation/Sign Up</button>
        <div className="placeholder"></div>
      </div>
      <div className="right">
        <text className="titleTextRight">User Log In</text>
      </div>
    </div>
  );
}

export default Home;
