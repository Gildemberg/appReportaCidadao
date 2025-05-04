import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    label: {
        marginLeft: 10
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#AAA',
        marginBottom: 20,
        marginTop: -5,
        paddingBottom:-5,
        color: '#000'
    },
    
    btnCard: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#053283'
    },
    txtBtnCard: {
        color:'#fff',
        fontWeight: '800',
    },

    alerta:{
        color: '#ee0000',
        textAlign: 'right'
    }
})

export default style;