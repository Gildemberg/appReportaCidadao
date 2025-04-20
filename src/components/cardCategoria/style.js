import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    botao:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        height: 75
    },
    icon: {
        height: 55,
        flex: 1,
        margin: 20,
    },
    texto: {
        fontSize: 20,
        flex: 4,
    }
})
export default style;