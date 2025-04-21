import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from './../../components/corpoDois';
import Card from './../../components/cardCategoria'

export default function Categoria({ navigation }) {
    return (
        <Corpo titulo={'SOLICITAÇÃO DE SERVIÇO'} navigation={ navigation }>
            <Text style={css.titulo}>Categoria</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <Card texto={'LIMPEZA URBANA'} navigation={ navigation }/>   
                <Card texto={'PAVIMENTAÇÃO'} navigation={ navigation }/>   
                <Card texto={'ILUMINAÇÃO PÚBLICA'} navigation={ navigation }/>   
                <Card texto={'OBRAS'} navigation={ navigation }/>   
                <Card texto={'ACESSIBILIDADE'} navigation={ navigation }/>   
                <Card texto={'ARBORIZAÇÃO'} navigation={ navigation }/>         
            </ScrollView>
        </Corpo>
    )
}