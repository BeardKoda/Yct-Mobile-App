/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';

export default class Home extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#09af00"
                    bar-style="light-content"
                />
                <Logo />
                <View style={styles.main}>
                    <Text style={styles.Text}>Heyoo</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.Text}>Heyoo</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#41c300',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Text:{
        color:'#fff',
        fontSize:18
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },  
});