import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default function CardMenu({ navigation, funcao, destino }) {
    const icons = {
        'LIMPEZA URBANA': require('./../../assets/icons/limpeza-urbana.png'),
        'INFRAESTRUTURA': require('./../../assets/icons/infraestrutura.png'),
        'TRANSPORTE PÚBLICO': require('./../../assets/icons/transporte.png'),
        'MEIO AMBIENTE': require('./../../assets/icons/meio-ambiente.png'),
        'EDUCAÇÃO' : require('./../../assets/icons/educacao.png'),
        'SAÚDE' : require('./../../assets/icons/saude.png'),
        'SEGURANÇA PÚBLICA': require('./../../assets/icons/guarda.png'),
        'HABITAÇÃO': require('./../../assets/icons/HABITACAO.png'),
        'DESENVOLVIMENTO SOCIAL': require('./../../assets/icons/SOCIAL.png'),
        'ESPORTES': require('./../../assets/icons/esportes.png'),
        'CULTURA': require('./../../assets/icons/teatro.png'),
        'SEFAZ': require('./../../assets/icons/iptu.png'),
    };

    return (
        <View style={css.container}>
            <TouchableOpacity style={css.botao} onPress={()=>navigation.navigate(destino, { titulo: funcao })}>
                <Image source={icons[funcao]} style={css.icon} resizeMode="contain"/>
                <Text style={css.texto}>{funcao}</Text>
            </TouchableOpacity>
        </View>
    )
}