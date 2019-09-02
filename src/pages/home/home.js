import React, { Component }  from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import  styles  from './home.style'
import { Homecarousel } from '../../components/feeds/carousel';
import { Single } from '../../components/feeds/single';

export default class Home extends Component {
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="#009f00"
                        bar-style="light-content"
                    />
                    <View style={styles.main}>
                        <Homecarousel />
                    </View>
                    <View style={styles.main}>
                        <Text style={styles.title}>Cradle Of Higher Learning In Nigeria</Text>
                        <Single />
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Departments')}>
                            <Text style={styles.buttonText}>View More</Text>
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.news}>
                        <Text style={styles.title}>News And Events</Text>
                        <Single />
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Departments')}>
                            <Text style={styles.buttonText}>View More</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.departments}>
                        <Text style={styles.title}>Schools and Departments</Text>
                        <Single />
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Departments')}>
                            <Text style={styles.buttonText}>View More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}