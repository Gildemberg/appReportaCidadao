import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerTeclado: {
        flex: 1,
    },
    scrollContent: {
        flex: 1, 
    },
    backgroundImagem:{
        flex: 1,
        justifyContent: 'center',
    },
    container:{
        flex: 1,
        backgroundColor: 'rgba(5,50,131,0.7)',
    },
    head:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(5,50,131,0.7)',
    },
    btnVoltar:{
        position: "absolute",
        left: 15
    },
    voltar: {
        width: 20,
        height: 20,
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 20
    },
    titulo: {
        color: '#fff',
        fontSize: 25
    },
    body:{
        flex: 3,
        backgroundColor: '#fafafa',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
    }
})
export default style;