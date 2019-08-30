/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export class Test extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world! Test 1</Text>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>Drawer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export class Test2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world! Test 2</Text>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>Drawer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}