import React from "react";
import { Link, Route, Switch, Router, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/Home";
import SignUpPageBasic from "./Components/SignUpBasic";
import SignUpPageEspn from "./Components/SignUpEspn";

const Home = () => <HomePage />;

const SignUpBasic = () => <SignUpPageBasic />;

const SignUpEspn = () => <SignUpEspn />;

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup/basic">
          <SignUpBasic />
        </Route>
        <Route path="/signup/espn">
          <SignUpPageEspn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
