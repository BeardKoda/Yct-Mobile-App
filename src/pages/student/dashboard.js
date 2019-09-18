import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './login.style'
import Logo from '../../../components/logo/logo';
import { connect } from 'react-redux';
import { login } from '../../../services/actions/login';

class StudDashboard extends Component {  
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: null
    //     }
    // }

    constructor(props){
        super(props)
        state = {
            isloggedIn: '',
            data: []
        }
    }

    componentDidMount(){
        this.props.checkLogin();
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
    
    _rend(){
        const { loggedIn } = this.props;
        console.log("here", this.props.loggedIn)
        // return loggedIn ? "LoggedIn" : "Not LoggedIn"
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <View>
                    <Text>{ this._rend()}</Text>
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
        async checkLogin(){
            // console.log(detail)
            const isloggedIn = await AsyncStorage.getItem('loggedIn').catch(e=>console.log(e))
            dispatch(login(detail))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(StudLogin)