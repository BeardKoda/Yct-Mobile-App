/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';


const Login = () => {
    return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.loginForm}>
                <TextInput placeholder="Matric No" style={styles.inputBox} placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TextInput placeholder="Password" style={styles.inputBox} placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },  
    inputBox:{
        width:300,
        backgroundColor:'#008b00',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10
    },
    buttonContainer:{
        backgroundColor: '#edde0a',
        paddingVertical: 15
    },
    buttonText:{
        color: '#008b00',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginForm:{
        padding:20
    }
});

export default Login;