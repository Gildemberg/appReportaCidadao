import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default function CardMenu({ navigation, funcao, destino }) {
    const icons = {
        'SOLICITAR SERVIÇO': require('./../../assets/icons/adicionar.png'),
        'MINHAS SOLICITAÇÕES': require('./../../assets/icons/pesquisar.png'),
        'SUGESTÕES PARA O APP': require('./../../assets/icons/falando.png'),
    };

    return (
        <View style={css.container}>
            <TouchableOpacity style={css.botao} onPress={()=>navigation.navigate(destino)}>
                <Image source={icons[funcao]} style={css.icon} resizeMode="contain"/>
                <Text style={css.texto}>{funcao}</Text>
            </TouchableOpacity>
        </View>
    )
}