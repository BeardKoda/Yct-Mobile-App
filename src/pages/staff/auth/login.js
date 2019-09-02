import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './login.style'
import Logo from '../../../components/logo/logo';

export default class StaffLogin extends Component {  
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Logo/>
            <View style={styles.Main}>
                <Text style={styles.MainText}>Staff's Portal</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput placeholder="Matric No" style={styles.inputBox} placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TextInput placeholder="Password" style={styles.inputBox}
                secureTextEntry={true} 
                placeholderTextColor='#ffffff' 
                underlineColorAndroid='rgba(0,0,0,0)'/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.StaffLogin}> 
                <TouchableOpacity style={styles.btnStaffLogin} onPress={() => this.props.navigation.goBack(null)}>
                    <Text  style={styles.StaffLoginText}>Back</Text>
                </TouchableOpacity> 
            </View>
        </View> 
        );
    }
}