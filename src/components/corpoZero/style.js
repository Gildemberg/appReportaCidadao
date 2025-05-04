import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerTeclado: {
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(5,50,131,0.7)',
    },
    backgroundImagem:{
        flex: 1,
        justifyContent: 'center',
    },
    scroll: { 
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        
    },

    head:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    logo: {
        height: 130,
        marginBottom: 20
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '200',
    },

    card: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 30,
        marginVertical: 30
    },
    headCard: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloCard: {
        fontSize: 20
    },
    btnCard: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#053283'
    },
    txtBtnCard: {
        color:'#fff',
        fontWeight: '800',
    },

    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelBtnBottom: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '300'
    },
    txtBtnBototm: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default style;