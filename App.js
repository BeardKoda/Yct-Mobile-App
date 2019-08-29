/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './src/components/splashscreen';
import Fade from './src/components/fad';
import Routes from './src/Routes'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
  
    return (  
        <Routes />
    );
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
}