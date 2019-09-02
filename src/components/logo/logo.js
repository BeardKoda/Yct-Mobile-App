/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const Logo = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={require('../../assets/logo.png')}/>
            <Text style={styles.LogoText}>Yaba College of Technology</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
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
        color:'#ffffff'
    }
});
export default Logo;