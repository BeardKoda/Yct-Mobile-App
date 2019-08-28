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
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <ScrollView style={styles.Body}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.LoginText}>
          Login
        </Text>
        <View style={styles.LoginForm}>
          <TextInput style={styles.textBox} placeholder='Username' />
          <TextInput style={styles.textBox} placeholder='Password' />
          <Button 
            style={styles.SubmitBtn}
            title="Submit"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Body:{
    backgroundColor:'#eee'
  },
  textBox:{
    padding:10,
    borderColor: "#000",
    borderRadius:3,
    borderWidth:1,
    marginBottom:10
  },
  SubmitBtn:{
    alignContent:"center",
    padding:20,
    width:50,
    color:'#efef',
    marginBottom:10
  },
  LoginText:{
    paddingTop: 100,
    fontSize:47,
    textAlign: "center"  
  },
  LoginForm:{
    flex: 1, 
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: "center",
  }
});

export default App;
