import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1
    },
    head:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    nome: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    cpf:{
        color: '#fff',
        fontSize: 18
    },
    body:{
        flex: 2,
        backgroundColor: '#fafafa',
        padding: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloBody:{
        flex: 2,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 40,
        fontWeight: '300'
    },
    botoesBody:{
        flex: 9,
        justifyContent: 'space-evenly'
    },
    botaoBody:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        borderWidth: 1,
        height: 70,
        justifyContent: 'center',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    boxIcon:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        width: 30,
        height: 30
    },
    txtBtn: {
        flex: 3,
        fontSize: 15,
        fontWeight: '500'
    },
    bottomBody: {
        flex: 1
    }
})
export default style;