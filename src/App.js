import React from "react";
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from 'react-navigation';

import Home from "./screens/Home/";
import NotHome from "./screens/NotHome/";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    NotHome: { screen: NotHome }
  },
  {
    index: 0,
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
