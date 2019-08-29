/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, world! About</Text>
            </View>
        );
    }
}