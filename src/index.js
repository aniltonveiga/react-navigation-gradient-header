import React, { Component, Fragment } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Fragment>
    );
  }
}
