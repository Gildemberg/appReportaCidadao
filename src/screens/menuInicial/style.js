import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    titulo: {
        fontSize: 40,
        fontWeight: '300',
        textAlign: 'center',
        marginVertical:20
    },
    scroll:{
        flex: 1
    },
    body:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap",
        justifyContent: 'space-between',
    }
    
})
export default style;