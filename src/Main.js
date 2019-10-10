/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Home from './pages/home/home';
import About from './pages/about/About';
import SmLogo from './components/logo/mlogo'
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import StudLogin from './pages/student/auth/login';
import Portal from './pages/portal/portal';
import Chat from './pages/chats/chat';
import SideMenu from './components/sidemenu/sidemenu';

const AppTabNavigator = createMaterialTopTabNavigator({
  Chats:{
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
  },
  tabBarOptions: {
    style: {
      backgroundColor: '#41c300',
    },
  }
});

const AppStackNavigator = createStackNavigator({
  Home:Home,
  Portal:Portal,
  Chat:Chat,
  Setting:About
},{
  defaultNavigationOptions:({navigation})=>{
        return{
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
  AppStackNavigator:AppStackNavigator
},{
  contentComponent: SideMenu
});

const AppNavigator = createSwitchNavigator({
  Auth: { screen: AppDrawerNavigator },
  App : {screen:AppDrawerNavigator}
});

const MainApp = createAppContainer(AppNavigator);

export default MainApp;