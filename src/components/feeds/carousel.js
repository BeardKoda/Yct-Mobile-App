/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component }from 'react';
import { StyleSheet,Text, ImageBackground, View,SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1 } from '../data/entries';

export class Homecarousel extends Component {

    _renderItem({item}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <ImageBackground style={{width:400, height:250}} source={item.carousel}>
                    <View style={{fle:1, alignItems: 'center', justifyContent:'center'}}>     
                        <Text style={{textAlign: 'center', marginTop:70, color:'#fff', fontSize:17, fontWeight:'bold',textTransform:'uppercase', textShadowColor:'red'}} >{item.title}</Text>
                        <Text style={{textAlign: 'center', marginTop:20, color:'#41c300', fontSize:13, fontWeight:'bold'}} >SUb Text</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <Carousel
                        data={ENTRIES1}
                        sliderWidth={450}
                        itemWidth={450}
                        renderItem={this._renderItem}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});