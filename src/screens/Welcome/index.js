// ./screens/welcome.js

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Welcome"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Olá, Fulano!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 19,
    color: "#444"
  }
});
