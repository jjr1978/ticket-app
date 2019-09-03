import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import PageUser from "./components/PageUser";
import store from "./store/store";
import { Provider } from "react-redux";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      user: null
    };
  }
  render() {
    return (
      <Provider store={store}>
        <PageUser />
      </Provider>
    );
  }
}
