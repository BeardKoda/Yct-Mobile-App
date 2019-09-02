import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./splashscreen.style";

export default class SplashScreen extends Component {
  state = {
    fadeValue: new Animated.Value(0)
  };
    componentDidMount(){
        this._start()
    }
  _start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 4000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#009f00"
          bar-style="light-content"
        />
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            justifyContent: "center"
          }}
        >
          <View style={styles.Lcontainer}>
              <Image style={styles.Image} source={require('../../assets/logo.png')}/>
              <Text style={styles.LogoText}>Yaba College of Technology</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}
