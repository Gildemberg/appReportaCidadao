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
        height: 75,
    },
    icon: {
        height:55,
        flex: 1,
        margin: 20,
    },
    infos:{
        flex: 4,

    },
    texto: {
        fontSize: 20,
        color: '#5d5d5d'
    },
    protocolo: {
        color: '#5d5d5d'
    },
    notificacao:{
        borderRadius:100,
        backgroundColor: '#ff0000',
        width:20,
        height:20,
    },
    txtNotificacao:{
        color: '#fff',
        textAlign: 'center'
    }
})
export default style;