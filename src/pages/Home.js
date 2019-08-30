/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Button} from 'react-native';
// import Homecarousel from '../components/carousel';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#009f00"
                    bar-style="light-content"
                />
                <View style={styles.main}>
                    <Text style={styles.Text}>Heyoo</Text>
                </View>
                <View style={styles.main}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Icon:{
        marginLeft:10
    },
    title:{
        color:'#000',
        
    },
    Text:{
        color:'#000',
        fontSize:18
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },  
});