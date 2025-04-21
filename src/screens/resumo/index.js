import React from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native';
import css from './style';
import Corpo from './../../components/corpoDois';

export default function Resumo({ navigation }) {
    return(
        <Corpo titulo={'SOLICITAÇÃO DE SERVIÇO'} navigation={ navigation }>
            <View style={css.container}>
                <Text style={css.titulo}>Resumo</Text>

                <View style={css.card}>
                    <View style={css.headCard}>
                        <Image style={css.icon} source={require('./../../assets/icons/Categorias/limpeza-urbana.png')} resizeMode="contain"/>
                        <Text style={css.subtitulo}>LIMPEZA URBANA</Text>
                    </View>

                    <Text style={css.detalhes}>• Recolher entulho</Text>
                    <Text style={css.detalhes}>• Solicito o recolhimento de entulho e resíduos sólidos acumulados, proveniente da obra realizada pela prefeitura. O entulho já está a meses aqui.</Text>
                    <Text style={css.detalhes}>• Av. Apolônio Salles, Centro</Text>
                    <Text style={css.detalhes}>• Próximo a Praça das Mangueiras</Text>
                </View>
                
                <TouchableOpacity style={css.btnProximo} onPress={()=>navigation.popTo('Tabs')}>
                    <Text style={css.txtBtnProximo}>CONFIRMAR</Text>
                </TouchableOpacity>
                
            </View>
        </Corpo>
    )
}