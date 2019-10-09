import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class portal extends Component {
  static navigationOptions = {
      title: 'Portal',
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
      <WebView
        source={{uri: 'https://google.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}