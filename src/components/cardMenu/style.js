import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
    },
    botao:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 15,
        alignItems: 'center',
    },
    icon: {
        height:30,
        flex: 1,
        margin: 20,
    },
    texto: {
        fontSize: 15,
        flex: 4,
        color: '#5d5d5d',
        fontWeight: 'bold'
    }
})
export default style;