import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from './../../components/corpoDois';
import Card from './../../components/cardSolicitacoes'

export default function MinhasSolicitacoes({ navigation }) {
    return (
        <Corpo titulo={'MINHAS SOLICITAÇÕES'} navigation={ navigation }>
            <Text style={css.titulo}>Solicitações</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <Card texto={'LIMPEZA URBANA'} protocolo={'251503'} navigation={ navigation }/>   
                <Card texto={'ILUMINAÇÃO PÚBLICA'} protocolo={'250502'} navigation={ navigation }/>   
                <Card texto={'OBRAS'} protocolo={'250101'} navigation={ navigation }/>   
                <Card texto={'ACESSIBILIDADE'} protocolo={'241212'} navigation={ navigation }/>   
            </ScrollView>
        </Corpo>
    )
}