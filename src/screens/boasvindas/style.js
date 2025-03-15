import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    head:{
        alignSelf: 'center',
        flex:1,
    },
    logo: {
        width: 120,
        height: 130,
        alignSelf: 'center'
    },
    titulo: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    titulo2: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        borderTopWidth: 1,
        textAlign: 'center'
    },
    card:{
        flex:2,
        borderRadius: 30,
        alignItems: 'center',
        padding: 40,
    },
    tituloCard1:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    tituloCard2:{
        color: '#fff',
        fontSize: 30,
    },
    textoCard:{
        color: '#fff',
        textAlign: 'justify',
        fontSize: 17
    },
    btn:{
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtn: {
        fontWeight: 'bold'
    }
})
export default style;