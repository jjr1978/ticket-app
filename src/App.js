import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import PageUser from "./components/PageUser";
// import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      user: null
    };
  }
  render() {
    return <PageUser />;
  }
}
