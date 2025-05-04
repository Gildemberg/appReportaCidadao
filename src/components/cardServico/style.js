import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
    },
    botao:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        height: 75,
        justifyContent: 'space-between',
    },
    icon: {
        height:20,
        width:20,
    },
    texto: {
        fontSize: 20,
        color: '#5d5d5d'
    }
})
export default style;