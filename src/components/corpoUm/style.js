import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerTeclado: {
        flex: 1,
    },
    scrollContent: {
        flex: 1, 
    },
    container:{
        flex: 1,
        backgroundColor: '#053283'
    },
    backgroundImagem:{
        flex: 1,
        justifyContent: 'center',
    },
    head:{
        flex: 1,
        backgroundColor: 'rgba(5,50,131,0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 100, 
        marginRight: 10
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
        flex: 3,
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default style;