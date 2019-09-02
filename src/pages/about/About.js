/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { View, Text} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Coming Soon!!!!</Text>
                {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>Back</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}