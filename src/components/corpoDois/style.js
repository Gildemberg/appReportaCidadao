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
    voltar: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 15
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginBottom: 20
    },
    titulo: {
        color: '#fff',
        fontSize: 25
    },
    body:{
        flex: 3,
        backgroundColor: '#fafafa',
        padding: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
    }
})
export default style;