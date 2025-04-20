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
        borderBottomLeftRadius:10,
        borderBottomRightRadius:0,
        padding:10,
        backgroundColor: '#C4C4C4',
        marginTop: '20'
    },
    detalhes:{
        marginVertical: 10,
        textAlign: 'justify'
    },

})
export default style;