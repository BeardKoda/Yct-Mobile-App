import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style'
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import ProfileLogo from '../logo/profile';
import SmLogo from '../logo/mlogo';
import Icon from "react-native-vector-icons/Ionicons";

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
                <View style={styles.logo}>
                    <ProfileLogo style={{marginLeft:50}}/>
                </View>
                <View style={styles.navSectionStyle}>
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                            color="#000"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText}>
                            Dashboard
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                            color="#000"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Portal')}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-settings"}
                            color="#000"
                            size={20}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.footerContainer} onPress={ () => this.props.navigation.navigate('Auth')}>
            <Icon 
                name={Platform.OS === "ios" ? "ios-add" : "md-log-out"}
                color="#000"
                size={25}
                style={styles.icon}
            />
            <Text style={styles.navItemText}>
                Sign Out
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;