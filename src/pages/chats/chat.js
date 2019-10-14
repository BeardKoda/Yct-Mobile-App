import React, {Component} from 'react';
import { View, Alert, FlatList, SafeAreaView, TextInput,  TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Box from "./components/box"
import datas from "./components/data"
import { SearchBar } from 'react-native-elements';

export default class  Chat extends Component { 
    constructor(props){
        super(props)
        this.state = {
            loading: false,      
            data: [], 
            search:''
          };
        this.arrayholder = [];
    }
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Chats",
        headerRight:(
            <View style={{flex:1, flexDirection:'row'}}>
                <TouchableOpacity>
                    <Icon
                        name={Platform.OS === "ios" ? "ios-person-add" : "md-person-add"}
                        color="#fff"
                        size={25}
                        style={{marginRight:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={Platform.OS === "ios" ? "ios-more" : "md-more"}
                        color="#fff"
                        size={25}
                        style={{marginRight:30}}
                    />
                </TouchableOpacity>
            </View>
        ),

        headerLeft:(
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
              name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
              color="#fff"
              size={30}
              style={{marginLeft:10}}
          />
      </TouchableOpacity>
      )
    })

    componentDidMount(){
        this.setState({          
            data: datas,      
            loading: false,   
        }); 
        this.arrayholder = datas
    }
    
    renderHeader = () => {
            return (
                <SearchBar        
                    placeholder="Type Here..."        
                    lightTheme
                    autoCorrect={false}             
                    round
                    onChangeText={(text) => this.searchFilterFunction(text)}
                />  
                // <TextInput 
                //         placeholder="type Here" 
                //         editable
                //         style={styles.inputBox} 
                //         autoCorrect={false}
                //         placeholderTextColor='#ffffff' 
                //         underlineColorAndroid='rgba(0,0,0,0)'
                //         onChangeText={(text) => this.searchFilterFunction(text)}
                //     />  
            );
    };

    searchFilterFunction = (text) => {    
        // console.log(text)
        const newData = this.arrayholder.filter(item => {      
          const itemData = `${item.name.toUpperCase()}   
          ${item.name.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ data: newData });
      };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="#006600"
                        bar-style="light-content"
                    />
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                            <Box
                                id={item.id} 
                                nav={this.props.navigation}
                                name={item.name}
                                msg={item.msg}
                            />
                            )}
                            keyExtractor={item => item.id}  
                            ListHeaderComponent={this.renderHeader}      
                        />
                    </SafeAreaView>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e6eae5',
        alignItems:'center',
        justifyContent:'center'
    },
    Icon:{
        justifyContent:'center',
        marginLeft:10
    },
})