import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style'
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import SmLogo from '../logo/mlogo';
import Icon from "react-native-vector-icons/Ionicons";

class SideMenu extends Component {
  state = {
    isLoggedIn: false
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  isLoggedMenu(){
    // if (!isLoggedIn) {
      return (
          <View>
            <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('StudentLogin')}>
                <Icon 
                    name={Platform.OS === "ios" ? "ios-add" : "md-person"}
                    color="#000"
                    size={20}
                    style={styles.icon}
                />
                <Text style={styles.navItemText}>
                    Student's Portal
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('StaffLogin')}>
            <Icon 
                name={Platform.OS === "ios" ? "ios-add" : "md-person"}
                color="#000"
                size={20}
                style={styles.icon}
            />
            <Text style={styles.navItemText}>
                Staff's Portal
            </Text>
        </TouchableOpacity> 
          </View>
      );
    // }
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
                    <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Dashboard')}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
                            color="#000"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText}>
                            News Feeds
                        </Text>
                    </TouchableOpacity>
                    {this.isLoggedMenu()}
                </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.footerContainer} onPress={this.navigateToScreen('Dashboard')}>
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