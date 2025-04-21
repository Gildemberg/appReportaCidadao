import React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import css from './style';
import Corpo from  './../../components/corpoDois';

export default function Localizacao({ navigation }) {
    return (
        <Corpo titulo={'SOLICITAÇÃO DE SERVIÇO'} navigation={ navigation }>
            <View style={css.container}>
                <Text style={css.titulo}>Localização</Text>

                <View style={css.mapa}></View>

                <Text style={css.subtitulo}>---- OU SE PREFIRIR, DIGITE O ENDEREÇO ----</Text>

                <Text style={css.label}>Rua/Avenida</Text>
                <TextInput style={css.input} placeholder="Ex.: Rua Freitas Cavalvente, 454"/>

                <Text style={css.label}>Bairro</Text>
                <TextInput style={css.input} placeholder="Ex.: Centro"/>

                <Text style={css.label}>Referência</Text>
                <TextInput style={css.input} placeholder="Ex.: Próximo ao Posto Shell"/>

                
                <TouchableOpacity style={css.btnProximo} onPress={()=>navigation.navigate('Resumo')}>
                    <Text style={css.txtBtnProximo}>PRÓXIMO</Text>
                </TouchableOpacity>
                
            </View>
        </Corpo>
    )
}