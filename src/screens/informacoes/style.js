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
    mapa:{
        backgroundColor: '#5d5d5d',
        height:150,
        borderRadius: 10,
    },
    subtitulo:{
        textAlign: 'center',
        marginTop:20,
        marginBottom:20,
        fontSize:16,
        width: '100%',
    },
    label: {
        marginBottom:5
    },
    input: {
        borderWidth: 1,
        borderRadius:8,
        borderColor: '#AAA',
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    select:{
        margin:10
    },
    containerUpload:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnUploadImagem:{
        width:'48%',
        height: 200,
        padding:10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius:10,
        borderStyle: 'dashed',
        borderColor: '#4698E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtUploadImagem:{
        textAlign: 'center',

    },  
    icon:{
        height:40,
        width:40
    },




    btnProximo:{
        borderWidth: 1,
        borderRadius:8,
        backgroundColor: '#fff',
        borderColor: '#5d5d5d',
        padding:8,
        shadowColor: "#000",
        elevation: 3,
        position: 'absolute',
        bottom: 20,
        width: '100%'
        
    },
    txtBtnProximo:{
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default style;