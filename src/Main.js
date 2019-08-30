/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { SafeAreaView, DrawerItems, ScrollView, Text } from "react-native";
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Home from './pages/Home';
import About from './pages/About';
import SmLogo from './components/mlogo'
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import StudLogin from './pages/student/login';
import StaffLogin from './pages/staff/login';
import SideMenu from './components/drawerComponent';

const AppTabNavigator = createBottomTabNavigator({
  Home:Home,
  About:About,  
}, {
  navigationOptions:({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  }
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:AppTabNavigator
},{
  defaultNavigationOptions:({navigation})=>{
    return{
      headerStyle: {
        backgroundColor: '#41c300',
      },
      headerTintColor: '#fff',
      headerRight: (
        <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
            <SmLogo />
        </TouchableOpacity>
      ),
      headerLeft:(
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
            name={Platform.OS === "ios" ? "ios-add" : "md-menu"}
            color="#fff"
            size={30}
            style={{marginLeft:10}}
        />
    </TouchableOpacity>
    )
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    screen:AppStackNavigator
  },
  StudentLogin:{
    screen:StudLogin
  },
  StaffLogin:{
    screen:StaffLogin
  }
},{
  contentComponent: SideMenu
});

const AppNavigator = createSwitchNavigator({
  Home: { screen: Home },
  Dashboard : {screen:AppDrawerNavigator}
});

const MainApp = createAppContainer(AppDrawerNavigator);

export default MainApp;