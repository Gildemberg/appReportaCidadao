import React from "react";
import { Text, View, ScrollView } from "react-native";
import css from './style';
import Corpo from './../../components/corpoDois';
import MsgUsuario from './../../components/msgUsuario'
import MsgGestor from './../../components/msgGestor'

export default function Historico({ navigation, texto, detalhe1, detalhe2, detalhe3, detalhe4 }) {
    return (
        <Corpo titulo={'MINHAS SOLICITAÇÕES'} navigation={ navigation }>
            <Text style={css.titulo}>Histórico</Text>
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <MsgUsuario texto={'LIMPEZA URBANA'} 
                            protocolo={'251503'}
                            detalhe1={'Recolher entulho'}
                            detalhe2={'Solicito o recolhimento de entulho e resíduos sólidos acumulados, proveniente da obra realizada pela prefeitura. O entulho já está a meses aqui.'}
                            detalhe3={'Av. Apolônio Salles, Centro'}
                            detalhe4={'Próximo a Praça das Mangueiras'}
                />
                <MsgGestor detalhe={'Sua solicitação está em análise...'}/>
                <MsgGestor detalhe={'Recebemos sua notificação e já iniciamos as operações, e em breve será recolhido o entulho.'}/>

            </ScrollView>
        </Corpo>
    )
}