/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Button} from 'react-native';
import SmLogo from '../components/mlogo';
import Icon from "react-native-vector-icons/Ionicons";

export default class Home extends Component {
    //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title:'News Feeds',
      //Heading style
      headerStyle: {
        backgroundColor: '#41c300',
      },
      //Heading text color
      headerTintColor: '#fff',
      headerRight: (
        <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
            <SmLogo />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
           <Icon
                name={Platform.OS === "ios" ? "ios-add" : "md-menu"}
                color="#fff"
                size={30}
                style={styles.Icon}
            />
        </TouchableOpacity>
      ),
    };
  };
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