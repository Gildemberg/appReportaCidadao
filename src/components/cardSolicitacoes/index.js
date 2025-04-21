import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default function CardSolicitacoes({ navigation, texto, protocolo }) {
    const icons = {
        'LIMPEZA URBANA': require('./../../assets/icons/Categorias/limpeza-urbana.png'),
        'PAVIMENTAÇÃO': require('./../../assets/icons/Categorias/pavimentacao.png'),
        'ILUMINAÇÃO PÚBLICA': require('./../../assets/icons/Categorias/iluminacao-publica.png'),
        'OBRAS': require('./../../assets/icons/Categorias/obras.png'),
        'ACESSIBILIDADE': require('./../../assets/icons/Categorias/acessibilidade.png'),
        'ARBORIZAÇÃO': require('./../../assets/icons/Categorias/arborizacao.png')
    };
    return (
        <View style={css.container}>
            <TouchableOpacity style={css.botao} onPress={()=>navigation.navigate('Historico')}>
                <Image source={icons[texto]} style={css.icon} resizeMode="contain"/>
                <View style={css.infos}>
                    <Text style={css.texto}>{texto}</Text>
                    <Text style={css.protocolo}>Protocolo: {protocolo}</Text>
                </View>
                <View style={css.notificacao}>
                    <Text style={css.txtNotificacao}>1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}