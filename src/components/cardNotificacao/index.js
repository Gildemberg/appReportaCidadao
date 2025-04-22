import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import css from './style';

export default function CardNotificacao({ navigation, titulo, protocolo, texto }) {
    return (
        <TouchableOpacity style={css.botao}>
            <Text style={css.titulo}>{titulo} {protocolo}</Text>
            <Text style={css.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}