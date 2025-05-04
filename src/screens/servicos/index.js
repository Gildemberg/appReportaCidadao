import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from '../../components/corpoDois';
import Card from '../../components/cardServico'

export default function Servicos({ navigation, route }) {
    return (
        <Corpo titulo={route.params.titulo} navigation={ navigation }>
            <Text style={css.titulo}>Serviços</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <Card texto={'Coleta de lixo domiciliar'} navigation={ navigation } titulo={ route.params.titulo } />   
                <Card texto={'Varrição de rua'} navigation={ navigation } titulo={ route.params.titulo}/>   
                <Card texto={'Coleta seletiva e reciclagem'} navigation={ navigation } titulo={ route.params.titulo }/>   
                <Card texto={'Limpeza de bueiro'} navigation={ navigation } titulo={ route.params.titulo}/>   
            </ScrollView>
        </Corpo>
    )
}