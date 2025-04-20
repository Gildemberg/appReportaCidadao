import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default props => {
    return (
        <View style={css.container}>
            <View style={css.card}>
                <Text style={css.detalhes}>{props.detalhe}</Text>
            </View>
            <Image style={css.imagem} source={require('./../../assets/img/logo_prefeitura.png')} resizeMode="contain"/>
        </View>
    )
}