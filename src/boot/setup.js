import * as Expo from "expo";
import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "../App";
import configureStore from "./configureStore";

export default class Setup extends Component {
  state = {
    store: Object,
    isLoading: boolean,
    isReady: boolean
  };
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
    );
  }
}
