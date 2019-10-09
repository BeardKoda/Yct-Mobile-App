import React, { Component }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/Ionicons";
import {Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenwidth = Math.round(Dimensions.get('window').width);

class Box extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    nav = (link) => {
        console.log(link)
        this.props.nav.navigate('portal')
    }

    render() {
        return (
            <View>
                <TouchableOpacity key={this.props.key} style={{
                    backgroundColor: this.props.color,
                    width:screenwidth - 30,
                    marginVertical:10,
                    paddingVertical: 15,
                    borderRadius:5
                }}  onPress={()=> this.props.nav.navigate('Portal')}>
                    <View style={{padding:20, flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.buttonText}>{this.props.title}</Text>
                            <Text style={{fontSize:10, color:'#fff', fontWeight:'100'}}>{this.props.subtitle}</Text>
                        </View>
                        
                        <Icon 
                        name={Platform.OS === "ios" ? "ios-"+this.props.icon : "md-"+this.props.icon}
                        color="#fff"
                        size={45}
                        style={styles.Icon}
                    />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#006600',
        width:screenwidth - 30,
        marginVertical:10,
        paddingVertical: 15,
        borderRadius:5
    },
    buttonText:{
        fontSize:30,
        color: '#fff',
        textAlign: 'left',
        fontWeight: '700'
    },
    Icon:{
        justifyContent:'center',
        marginLeft:10
    },
})

const mapStateToProps = state => {
    return {
        auths: state.authReducer
    };
}

export default connect(mapStateToProps)(Box);