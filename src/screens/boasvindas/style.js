import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(5,50,131,0.7)',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    backgroundImagem:{
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        alignSelf: 'center',
        marginVertical: 80
    },

    card:{
        borderRadius: 30,
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#fff'
    },
    titulo:{
        color: '#424242',
        fontWeight: '500',
        fontSize: 35,
        marginBottom: -10
    },
    subtitulo:{
        color: '#424242',
        fontSize: 35,
        marginBottom: 30,
        fontWeight: '300'
    },
    textoCard:{
        color: '#424242',
        textAlign: 'justify',
        fontSize: 15,
        marginBottom: 30
    },
    texto2Card:{
        color: '#424242',
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 30
    },
    btn:{
        backgroundColor: '#053283',
        width: '100%',
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtn: {
        fontWeight: 'bold',
        color: '#fff'
    }
})
export default style;