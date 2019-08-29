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
import Logo from "./logo";

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
      duration: 2000
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
              <Image style={styles.Image} source={require('../assets/logo.png')}/>
              <Text style={styles.LogoText}>Yaba College of Technology</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#41c300",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },
  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  },
  Lcontainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center'
},  
Image:{
    width:100,
    height:100
},
LogoText:{
    marginVertical:15,
    fontSize:18,
    color:'#000333'
}
});