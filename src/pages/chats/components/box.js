import React, { Component }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
    render() {
        return (
            <View>
                <TouchableOpacity key={this.props.id} style={{
                    backgroundColor: "#fff",
                    width:screenwidth - 30,
                    marginVertical:5,
                    paddingVertical: 15,
                    borderRadius:25
                }}  onPress={()=> this.props.nav.navigate("Home")}>
                    <View style={{padding:5, flexDirection:'row'}}>
                        <Image style={styles.Icon} source={require('../../../assets/plogo2.png')}/>
                        <View style={{flex:1, marginLeft:40}}>
                            <Text style={styles.buttonText}>{this.props.name}</Text>
                            <Text style={{fontSize:16, color:'#808080', fontWeight:'100'}}>{this.props.msg}</Text>
                        </View>
                        <View>
                            <Text style={{textAlign:"center", color:"#eee"}}>
                                11:30
                            </Text>
                            <View style={{
                                    alignContent:"center",
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20/2,
                                    backgroundColor: '#006000'}}>
                                <Text style={{textAlign:"center", color:"#fff"}}>
                                    3
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#e6eae5',
        width:screenwidth - 30,
        marginVertical:5,
        paddingVertical: 5,
        borderRadius:35,
        marginLeft:20
    },
    buttonText:{
        fontSize:18,
        color: '#000',
        textAlign: 'left',
        fontWeight: '700'
    },
    Icon:{
        width:40,
        height:40,
        justifyContent:'center',
        marginLeft:5
    },
})

const mapStateToProps = state => {
    return {
        auths: state.authReducer
    };
}

export default connect(mapStateToProps)(Box);