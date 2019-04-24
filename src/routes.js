import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LinearGradient from "react-native-linear-gradient";

import Welcome from "./screens/Welcome";

const WelcomeStack = createStackNavigator(
  {
    Welcome
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      // background gradiente
      headerBackground: (
        <LinearGradient
          colors={["#f4511e", "#7c2362"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      )
    }
  }
);

const Routes = createAppContainer(WelcomeStack);

export default Routes;
