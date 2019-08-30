/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createDrawerNavigator,  createAppContainer } from "react-navigation";
import Home from './pages/Home';
import About from './pages/About';
import StudLogin from './pages/student/login'

const AppNavigator = createStackNavigator({
    Home:{
      screen:Home
    },
    About:{
      screen:About
    },
    StudLogin:{
      screen:StudLogin,
      navigationBarStyle : {navBarHidden: true },
      animationType: 'slide-down'
    }
  },{
          initialRouteName: "Home",
          defaultNavigationOptions: {
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            // header: null
          },
  });
// const Routes = AppNavigator;
const Routes = createAppContainer(AppNavigator);

export default Routes;