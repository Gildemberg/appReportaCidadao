import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    navbar:{
        position: 'absolute',
        bottom:0,
        flex: 1,
        flexDirection: 'row'
    },
    nav: {
        height: 50,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    teste:{
        width: 55,
        alignItems: 'center'
    },
    home:{
        width: '100%',
        bottom: 25,
        backgroundColor: '#fff', 
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff'
    },
    homeBtn:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: 30,
        height: 30
    },
})
export default style;