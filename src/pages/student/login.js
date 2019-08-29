/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../../components/logo';

export default class StudLogin extends Component { 
    render() {
        return (
            <View style={styles.container}>
            <Logo/>
            <View style={styles.Main}>
                <Text style={styles.MainText}>Student's Portal</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput placeholder="Matric No" style={styles.inputBox} placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TextInput placeholder="Password" style={styles.inputBox}
                secureTextEntry={true} 
                placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.StaffLogin}> 
                <Text style={styles.staffLoginText}>Are You a Staff?</Text> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StaffLogin')}>
                    <Text style={styles.btnStaffLogin}>Sigin in</Text>
                </TouchableOpacity>
            </View>
        </View> 
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#008b00'
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
        marginVertical:10,
        paddingVertical: 15,
        borderRadius:25
    },
    buttonText:{
        color: '#008b00',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginForm:{
        padding:20
    },
    StaffLogin:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    staffLoginText:{
        color:'#ffffff',
        fontSize:18
    },
    btnStaffLogin:{
        fontSize:16,
        fontWeight:'500',
        color:'#edde0a'
    },
    Main:{
        flexGrow:1,
        alignItems:"center",
        justifyContent:'center'
    },
    MainText:{
        fontSize:27,
        color:'#edde0a',
        fontWeight:'800'
    },
});