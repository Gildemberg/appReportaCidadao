import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    titulo:{
        flex:1,
        fontSize: 40,
        alignSelf: 'center'
    },
    body:{
        flex: 5,
        justifyContent: 'center',
    },
    label: {
        marginLeft: 10
    },
    input: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: -5,
        paddingBottom:-5
    },
    bottom: {
        flex:2,
    }
})
export default style;