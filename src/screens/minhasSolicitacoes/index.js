import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from './../../components/corpoDois';
import Card from './../../components/cardSolicitacoes'

export default props => {
    return (
        <Corpo titulo={'MINHAS SOLICITAÇÕES'}>
            <Text style={css.titulo}>Solicitações</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <Card texto={'LIMPEZA URBANA'} protocolo={'251503'}/>   
                <Card texto={'ILUMINAÇÃO PÚBLICA'} protocolo={'250502'}/>   
                <Card texto={'OBRAS'} protocolo={'250101'}/>   
                <Card texto={'ACESSIBILIDADE'} protocolo={'241212'}/>   
            </ScrollView>
        </Corpo>
    )
}