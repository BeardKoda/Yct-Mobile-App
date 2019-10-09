import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style'
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
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
                    <SmLogo style={{marginLeft:50}}/>
                </View>
                <View style={styles.navSectionStyle}>
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('App')}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
                            color="#000"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText}>
                            Media
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('StudentLogin')}>
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