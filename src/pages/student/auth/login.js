import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './login.style'
import Logo from '../../../components/logo/logo';
import { connect } from 'react-redux';
import { login } from '../../../services/actions/login';

class StudLogin extends Component {  
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    constructor(props){
        super(props)
        state = {
            matric_no: '',
            password: ''
        }
    }

    _login = () => {
        const {matric_no, password} = this.state;
        
        if(matric_no.trim() === '' && password.trim() === '') {
            console.log('Error')
            return;
        }

        //save data with asyncstorage
        let loginDetails = {
            matric_no: matric_no,
            password:password
        }
        // console.log(loginDetails);
 
        this.props.add(loginDetails);
    }
    
    placeNameChangeHandler = (value) => {
      this.setState({
        maric_no: value
      });    
    }
    // _rend(){
    //     const { loggedIn } = this.props;
    //     console.log("here", this.props.loggedIn)
    //     // return loggedIn ? "LoggedIn" : "Not LoggedIn"
    // }
    render() {
        return (
            <View style={styles.container}>
            <Logo/>
            <View style={styles.Main}>
                <Text style={styles.MainText}>Student's Portal</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput placeholder="Matric No" style={styles.inputBox} placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={(matric_no) => this.setState({matric_no})}
                onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput placeholder="Password" style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                secureTextEntry={true} 
                placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this._login()}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.StaffLogin}> 
                <TouchableOpacity style={styles.btnStaffLogin} onPress={() => this.props.navigation.goBack(null)}>
                    <Text  style={styles.StaffLoginText}>Back</Text>
                </TouchableOpacity> 
            </View>
            <View>
            </View>
        </View> 
        );
    }
}

const mapStateToProps = state => {
    let datas = state.data;
    return {
      datas: datas,
      loggedIn : state.loggedIn
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        add: (detail) => {
            // console.log(detail)
            AsyncStorage.multiSet([[data, detail], [loggedIn, true]])
            dispatch(login(detail))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(StudLogin)