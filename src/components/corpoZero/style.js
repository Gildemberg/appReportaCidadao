import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerTeclado: {
        flex:1,
    },
    container: {
        flex: 1,
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
    },
    logo: {
        height: 130,
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '200',
    },

    card: {
        backgroundColor: '#fff',
        padding: 40,
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
        backgroundColor: '#0C828E'
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
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default style;