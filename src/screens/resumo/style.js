import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex:1
    },
    titulo:{
        fontSize: 40,
        marginBottom: 40,
        alignSelf: 'center',
        color: '#5d5d5d',
        fontWeight: '300'
    },
    
    card:{
        borderWidth:1,
        borderBlockColor: '#5d5d5d',
        borderRadius:10,
        padding:10,
        backgroundColor: '#fff',
        elevation:12
    },
    headCard:{
        flexDirection: 'row',
    }, 
    icon:{
        height:50,
        width:50,
        flex:1
    },
    subtitulo:{
        fontSize:16,
        flex:2,
        alignSelf: 'center',
        fontWeight: '500'
    },
    detalhes:{
        marginVertical: 10,
        textAlign: 'justify'
    },

    btnProximo:{
        borderWidth: 1,
        borderRadius:8,
        backgroundColor: '#0C828E',
        borderColor: '#0C828E',
        padding:8,
        shadowColor: "#000",
        elevation: 3,
        position: 'absolute',
        bottom: 20,
        width: '100%'
        
    },
    txtBtnProximo:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default style;