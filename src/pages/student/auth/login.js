import React, {Component} from 'react';
import { View, Alert, Text,  TextInput, TouchableOpacity } from 'react-native'; 
import styles from './login.style'
import Logo from '../../../components/logo/logo';
import { actions as auth } from "../index"
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

const { login } = auth;

class StudLogin extends Component {  
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    constructor(props) {
        super(props);
        this.state = {
                email:'',
                password:''
        },
        this.spinner = false,
        console.log(this.props.auths)
    }

    handleChange = key => val => {
        this.setState({[key]:val})
    }
    Startloader = () =>{
        if(this.state.spinner == true){
            this.setState({
                spinner:false
            })
            setTimeout(() => {
                Alert.alert('Oops!', err.message);
              }, 100);
            console.log(this.state.spinner)
        }else{
            this.setState({
                spinner:true
            })
            console.log(this.state.spinner)
        }
    }
    
    submitLogin = () => {
        // this.Startloader()
        // if(this.state.email.length < 10){
        //     Alert.alert('Error', "Invaild Email")
        // }else if(this.state.password.length < 4){
        //     Alert.alert('Error', "Password should not be less than 8 characters")
        // }else{
            // console.log(this.state);
            this.props.login(this.state)
                .then(({exists, user}) => {
                    if (exists) {
                        this.props.navigation.navigate('App')
                    }
                })
        // }
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <View style={styles.Main}>
                    <Text style={styles.MainText}>YCT Chat's Login</Text>
                </View>
                <Spinner
                    visible={this.state.isloading}
                    textContent={'Siginin...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <View style={styles.loginForm}>
                    <TextInput 
                        placeholder="Email" 
                        style={styles.inputBox} 
                        autoCorrect={false}
                        placeholderTextColor='#ffffff' 
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextInput 
                        placeholder="Password" 
                        style={styles.inputBox}
                        secureTextEntry={true} 
                        placeholderTextColor='#ffffff' 
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=> this.submitLogin()}>
                        <Text  style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.StaffLogin}> 
                    <TouchableOpacity style={styles.btnStaffLogin} onPress={() => this.props.navigation.goBack(null)}>
                        <Text  style={styles.StaffLoginText}>Visit Yabatech's Site</Text>
                    </TouchableOpacity> 
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

export default connect(mapStateToProps, { login })(StudLogin);