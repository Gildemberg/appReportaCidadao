import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default function CardServico({ navigation, texto, titulo }) {
    return (
        <View style={css.container}>
            <TouchableOpacity style={css.botao} onPress={()=>navigation.navigate('Informacoes',  { titulo: titulo })}>
                <Text style={css.texto}>{texto}</Text>
                <Image source={require('./../../assets/icons/seta-direita2.png')} style={css.icon} resizeMode="contain"/>
            </TouchableOpacity>
        </View>
    )
}