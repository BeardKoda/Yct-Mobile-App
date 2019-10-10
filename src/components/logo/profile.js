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

const ProfileLogo = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={require('../../assets/plogo.png')}/>
            <Text style={styles.LogoText}>F/HD/17/321001234</Text>
            <Text style={styles.LogoSmText}>Computer Science</Text>
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
        marginVertical:0,
        fontSize:18,
        color:'#ffffff'
    },
    LogoSmText:{
        marginVertical:5,
        fontSize:18,
        color:'#ffffff'
    }
});
export default ProfileLogo;