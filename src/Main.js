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
import Home from './pages/home/home';
import About from './pages/about/About';
import SmLogo from './components/logo/mlogo'
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import StudLogin from './pages/student/auth/login';
import StaffLogin from './pages/staff/auth/login';
import SideMenu from './components/sidemenu/sidemenu';

const AppTabNavigator = createBottomTabNavigator({
  NewsFeed:{
    screen:Home,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon 
          name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
          color={tintColor}
          size={25}
      />
        )
    })
  },
  Departments:{
     screen:About,
     navigationOptions: () => ({
         tabBarIcon: ({tintColor}) => (
           <Icon 
           name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
           color={tintColor}
           size={25}
       />
         )
     })
   },
  Chats:{
    screen:About,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon 
          name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
          color={tintColor}
          size={25}
      />
        )
    })
  },
  Messages:{
      screen:About,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <Icon 
            name={Platform.OS === "ios" ? "ios-add" : "md-message"}
            color={tintColor}
            size={25}
        />
          )
      })
  },  
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
  initialRouteName:'StudentLogin',
  contentComponent: SideMenu
});

// const AppNavigator = createSwitchNavigator({
//   Home: { screen: Home },
//   Dashboard : {screen:AppDrawerNavigator}
// });

const MainApp = createAppContainer(AppDrawerNavigator);

export default MainApp;