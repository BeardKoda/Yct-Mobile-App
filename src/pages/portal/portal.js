import React, { Component }  from 'react';
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview';

export default class Portal extends Component {
    static navigationOptions = {
        title: 'Portal',
    };
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