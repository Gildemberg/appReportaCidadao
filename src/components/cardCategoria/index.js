import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default function CardCategoria({ navigation, texto }) {
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
            <TouchableOpacity style={css.botao} onPress={()=>navigation.navigate('Informacoes')}>
                <Image source={icons[texto]} style={css.icon} resizeMode="contain"/>
                <Text style={css.texto}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}