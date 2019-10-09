/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from './src/components/splashscreen/splashscreen';
import MainApp from './src/Main';

import store from './src/redux/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false,
    spinner:false }
  }

  render() {
    // if (this.state.isLoading) {
    //   return <SplashScreen />;
    // }
  
    return (  
      
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
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