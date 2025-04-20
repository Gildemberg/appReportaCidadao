import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerTeclado: {
        flex: 1,
    },
    scrollContent: {
        flex: 1, 
    },
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
    }
})
export default style;