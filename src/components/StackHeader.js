import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style'
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import SmLogo from '../logo/mlogo';
import Icon from "react-native-vector-icons/Ionicons";

navigateToScreen = (route) => () => {
const navigateAction = NavigationActions.navigate({
    routeName: route
});
this.props.navigation.dispatch(navigateAction);
}

export default {
        headerStyle: {
          backgroundColor: '#006600',
          shadowColor: 'transparent',
          elevation:0,
          shadowRadius: 0,
          shadowOffset: {
              height: 0,
          },
        },
        headerTintColor: '#fff',
        headerRight: (
          <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
              {/* <SmLogo /> */}
              <Text>Search</Text>
          </TouchableOpacity>
        ),
          headerLeft:(
          <TouchableOpacity onPress={() => navigateToScrren('Home')}>
            <Icon
                name={Platform.OS === "ios" ? "ios-add" : "md-menu"}
                color="#fff"
                size={30}
                style={{marginLeft:10}}
            />
        </TouchableOpacity>
        )
}