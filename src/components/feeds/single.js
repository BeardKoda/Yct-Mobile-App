/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component }from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView} from 'react-native';
import { ENTRIES1 } from '../data/entries';

export class Single extends Component {

    dataList = [
        {
          id: 1,
          image: require('../../assets/images/stafff.jpg'),
          main: "Engr. Obafemi Omokungbe",
          sub: "Rector",
          description:''
        },
        {
          id: 2,
          image: require('../../assets/images/stafff.jpg'),
          main: "Dr. S. O. Momodu",
          sub: "Registrar",
          description:''
        },
        {
          id: 2,
          image: require('../../assets/images/stafff.jpg'),
          main: "Dr. S. O. Momodu",
          sub: "Dr. S. O. Momodu",
          description:''
        },
      ];

    _renderItem(){
        return (  
            <View style={{flex:1, padding:10, flexDirection:'row', justifyContent:'space-between'}}>
               {this.dataList.map(r => 
                <View style={{flex:2, padding:10}}>
                    <Image style={styles.Image} source={r.image}/>
                    <Text>{r.main}</Text>
                    <Text>{r.sub}</Text>
                    <Text>{r.description}</Text>
                </View>
                )}
            </View>
        )
    }

      
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this._renderItem()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    color:'#eee',
  },
  Image:{
      width:100,
      height:100,
      justifyContent:'center',

  },
});