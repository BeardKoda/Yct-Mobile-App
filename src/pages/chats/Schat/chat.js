import React, {Component} from 'react';
import { View, Alert, Text,  TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class  Chat extends Component { 
    static navigationOptions = ({ navigation }) => ({
        title: 'Chats',
        headerRight: (
            <View style={{flex:1, flexDirection:'row'}}>
                <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
                    <Icon
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                        color="#fff"
                        size={25}
                        style={{marginRight:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={Platform.OS === "ios" ? "ios-person-add" : "md-person-add"}
                        color="#fff"
                        size={25}
                        style={{marginRight:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={Platform.OS === "ios" ? "ios-more" : "md-more"}
                        color="#fff"
                        size={25}
                        style={{marginRight:30}}
                    />
                </TouchableOpacity>
            </View>
        ),
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

    constructor(props){
        super(props)
        console.log(this.props.navigation)
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="#006600"
                        bar-style="light-content"
                    />
                    <View>
                        <Text>Coming Soon</Text>
                    </View>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    Icon:{
        justifyContent:'center',
        marginLeft:10
    },
})