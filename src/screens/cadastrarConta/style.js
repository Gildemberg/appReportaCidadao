import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    containerTeclado: {
        flex: 1,
    },
    scroll: {
        flex: 1, 
    },
    scrollContent: {
        flexGrow: 1, 
    },
    head:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 130,
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '200',
    },

    card: {
        flex: 2,
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 30,
    },
    headCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloCard: {
        fontSize: 20
    },
    bodyCard: {
        flex: 5,
        justifyContent: 'center',
    },
    label: {
        marginLeft: 10
    },
    input: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: -5,
        paddingBottom:-5
    },
    bottomCard: {
        flex:1
    },
    btnCadastrar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10
    },
    txtBtn: {
        color:'#fff',
        fontWeight: '800',
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelBtnEntrar: {
        color: '#fff',
        fontSize: 18
    },
    txtBtnEntrar: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default style;