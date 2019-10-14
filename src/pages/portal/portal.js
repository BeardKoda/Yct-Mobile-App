import React, { Component }  from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';
import Icon from "react-native-vector-icons/Ionicons";

export default class Portal extends Component {
    static navigationOptions = ({navigation}) =>  ({
        title: 'Portal',
        headerLeft:(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
                name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                color="#fff"
                size={30}
                style={{marginLeft:10}}
            />
        </TouchableOpacity>
        )
    })

    displaySpinner() {
      return (
        <View>
          <Text style={{fontSize:20}}>Loading</Text>
        </View>
      );
    }

    render() {
        return (<WebView
                    startInLoadingState={true}
                    source={{uri: 'http://portal.yabatech.edu.ng/portalplus/'}}
                    style={{marginTop: 0}}
                    renderLoading={() => {
                      return this.displaySpinner();
                    }}
                />
        );
    }
}