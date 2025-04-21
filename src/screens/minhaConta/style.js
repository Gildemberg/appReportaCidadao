import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    titulo:{
        fontSize: 40,
        alignSelf: 'center',
        marginVertical:20
    },
    body:{
        justifyContent: 'center',
        padding:10
    },
    input: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: -5,
        paddingBottom:-5,
        color: '#000',
    },
    btnSair:{
        borderRadius:8,
        backgroundColor: '#0C828E',
        padding:8,
    },
    txtBtnSair:{
        color: '#fff',
        textAlign: 'center'
    }
})
export default style;