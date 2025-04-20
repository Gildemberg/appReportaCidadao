import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import css from './style';

export default props => {
    return (
        <View style={css.container}>
            <Image style={css.imagem} source={require('./../../assets/img/foto.jpg')} resizeMode="contain"/>
            <View style={css.card}>
                    <View style={css.headCard}>
                        <Image style={css.icon} source={require('./../../assets/icons/Categorias/limpeza-urbana.png')} resizeMode="contain"/>
                        <View style={css.infos}>
                            <Text style={css.subtitulo}>{props.texto}</Text>
                            <Text style={css.protocolo}>Protocolo: {props.protocolo}</Text>
                        </View>
                    </View>

                    <Text style={css.detalhes}>• {props.detalhe1}</Text>
                    <Text style={css.detalhes}>• {props.detalhe2}</Text>
                    <Text style={css.detalhes}>• {props.detalhe3}</Text>
                    <Text style={css.detalhes}>• {props.detalhe4}</Text>
                </View>
        </View>
    )
}