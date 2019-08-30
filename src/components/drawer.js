/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createDrawerNavigator, createAppContainer } from "react-navigation";
import StudLogin from '../pages/student/login'

const DrawerNavigator = createDrawerNavigator(
    {
      StudLogin: StudLogin,
    },
    {
      hideStatusBar: true,
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      overlayColor: '#6b52ae',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
  
  export default drawer = createAppContainer(DrawerNavigator);