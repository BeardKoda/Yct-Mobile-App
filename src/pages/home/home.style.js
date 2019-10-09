import {Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenwidth = Math.round(Dimensions.get('window').width);
export default {
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    Icon:{
        justifyContent:'center',
        marginLeft:10
    },
    buttonContainer:{
        backgroundColor: '#006600',
        width:screenwidth - 30,
        marginVertical:10,
        paddingVertical: 15,
        borderRadius:5
    },
    buttonText:{
        fontSize:30,
        color: '#fff',
        textAlign: 'left',
        fontWeight: '700'
    },
    main:{
        flex:1,
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'center'
    },
};