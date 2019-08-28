/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Login from './src/pages/login'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor="#008b00"
      barStyle="dark-content" />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#41c300',
  },
});

export default App;
