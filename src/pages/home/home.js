import React, { Component }  from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import  styles  from './home.style';
import { connect } from 'react-redux';
import menu from './comp/data';
import Box from "./comp/box";

class Home extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };
    menu = menu;
    constructor(props){
        super(props);
        // if(!this.props.auths.isLoggedIn){
        //     console.log("not loggedin")
        // }
    }
    componentDidMount(){
        // console.log(this.props.auths)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="#006600"
                        bar-style="light-content"
                    />
                <View>
                    <Text style={{textAlign:"center", fontSize:20, fontWeight:"900"}}>
                        Welcome Back, Joshua
                    </Text>
                {this.menu.map((data)=>
                    (
                        <Box  key={data.id} nav={this.props.navigation}
                        title={data.title} 
                        subtitle={data.subtitle} 
                        icon={data.icon} 
                        color={data.color}
                        link={data.link}/>
                    ))
                }
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        auths: state.authReducer
    };
}

export default connect(mapStateToProps)(Home);