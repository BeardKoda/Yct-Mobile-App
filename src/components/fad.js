

import React, { Component }  from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';

export default class SplashScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Logo />
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#41c300",
    },
});