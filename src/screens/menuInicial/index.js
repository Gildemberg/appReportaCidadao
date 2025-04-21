import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import css from './style';
import CorpoUm from './../../components/corpoUm';
import Card from './../../components/cardMenu';

export default function MenuInicial({ navigation }) {
    return (
            <CorpoUm>
                <Text style={css.titulo}>ReportaCidadão</Text>
                    <Card style={css.botaoBody} navigation={ navigation } funcao={ 'SOLICITAR SERVIÇO' } destino={ 'Categoria'}/>
                    <Card style={css.botaoBody} navigation={ navigation } funcao={ 'MINHAS SOLICITAÇÕES' } destino={ 'MinhasSolicitacoes'}/>
                    <Card style={css.botaoBody} navigation={ navigation } funcao={ 'SUGESTÕES PARA O APP' } destino={ 'Categoria'}/>
            </CorpoUm>
    )
}