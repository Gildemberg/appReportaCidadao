import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import css from './style';

export default props => {
    return (
        <View style={css.container}>
            <TouchableOpacity style={css.botao}>
                <Text style={css.titulo}>Solicitação 250315001</Text>
                <Text style={css.texto}>Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.botao}>
                <Text style={css.titulo}>Solicitação 250315001</Text>
                <Text style={css.texto}>Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.botao}>
                <Text style={css.titulo}>Solicitação 250315001</Text>
                <Text style={css.texto}>Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.botao}>
                <Text style={css.titulo}>Solicitação 250315001</Text>
                <Text style={css.texto}>Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.botao}>
                <Text style={css.titulo}>Solicitação 250315001</Text>
                <Text style={css.texto}>Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.</Text>
            </TouchableOpacity>
        </View>
    )
}