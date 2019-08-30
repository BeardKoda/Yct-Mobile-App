import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style'
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import SmLogo from './mlogo';
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
                    <View style={styles.navItemStyle}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-paper"}
                            color="#000"
                            size={25}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText} onPress={this.navigateToScreen('Home')}>
                            News Feeds
                        </Text>
                    </View>
                    <View style={styles.navItemStyle}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-person"}
                            color="#000"
                            size={20}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText} onPress={this.navigateToScreen('Home')}>
                            Student's Portal
                        </Text>
                    </View>
                    <View style={styles.navItemStyle}>
                        <Icon 
                            name={Platform.OS === "ios" ? "ios-add" : "md-person"}
                            color="#000"
                            size={20}
                            style={styles.icon}
                        />
                        <Text style={styles.navItemText} onPress={this.navigateToScreen('Home')}>
                            Staff's Portal
                        </Text>
                    </View>
                </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
            <Icon 
                name={Platform.OS === "ios" ? "ios-add" : "md-log-out"}
                color="#000"
                size={25}
                style={styles.icon}
            />
            <Text style={styles.navItemText} onPress={this.navigateToScreen('Home')}>
                Sign Out
            </Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;