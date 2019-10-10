import React, {Component} from 'react';
import { View, Alert, Text,  TextInput, TouchableOpacity } from 'react-native';

export default class  Chat extends Component {
    static navigationOptions = {
        title: 'Chats',
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="#006600"
                        bar-style="light-content"
                    />
                <Text>Coming Soon</Text>
            </View>        
        );
    }
}
const styles = StyleSheet.Create({
    container:{
        backgroundColor:"#fff"
    }
})