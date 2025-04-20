import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from './../../components/corpoDois';
import Card from './../../components/cardCategoria'

export default props => {
    return (
        <Corpo>
            <Text style={css.titulo}>Categoria</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <Card texto={'LIMPEZA URBANA'}/>   
                <Card texto={'PAVIMENTAÇÃO'}/>   
                <Card texto={'ILUMINAÇÃO PÚBLICA'}/>   
                <Card texto={'OBRAS'}/>   
                <Card texto={'ACESSIBILIDADE'}/>   
                <Card texto={'ARBORIZAÇÃO'}/>         
            </ScrollView>
        </Corpo>
    )
}