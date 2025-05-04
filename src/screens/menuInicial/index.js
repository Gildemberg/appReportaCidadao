import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import css from './style';
import CorpoUm from './../../components/corpoUm';
import Card from './../../components/cardMenu';

export default function MenuInicial({ navigation }) {
    return (
            <CorpoUm>
                <Text style={css.titulo}>ReportaCidadão</Text>
                <ScrollView contentContainerStyle={css.scroll} 
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                    >
                    <View style={css.body}>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'LIMPEZA URBANA' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'INFRAESTRUTURA' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'TRANSPORTE PÚBLICO' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'MEIO AMBIENTE' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'EDUCAÇÃO' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'SAÚDE' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'SEGURANÇA PÚBLICA' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'HABITAÇÃO' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'DESENVOLVIMENTO SOCIAL' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'ESPORTES' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'CULTURA' } destino={ 'Servicos'}/>
                        <Card style={css.botaoBody} navigation={ navigation } funcao={ 'SEFAZ' } destino={ 'Servicos'}/>
                    </View>
                </ScrollView>
            </CorpoUm>
    )
}