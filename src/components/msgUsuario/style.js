import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem:{
        width: 60,
        height: 60,
        borderRadius: 100,
        alignSelf: 'flex-end'
    },
    card:{
        width:'85%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:10,
        padding:10,
        backgroundColor: '#B4E2B2',
    },
    headCard:{
        flexDirection: 'row',
    }, 
    icon:{
        height:50,
        width:50,
        flex:1
    },
    infos:{
        flex:2,

    },
    subtitulo:{
        fontSize:16,
        fontWeight: '500'
    },
    detalhes:{
        marginVertical: 10,
        textAlign: 'justify'
    },

})
export default style;