import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import CorpoUm from './../../components/corpoUm';
import CardNotificacao from './../../components/cardNotificacao';

export default function CaixaDeEntrada({ navigation }) {
    return (
        <CorpoUm>
            <Text style={css.titulo}>Notificações</Text>
            <View style={css.body}>
                <ScrollView style={css.scroll} contentContainerStyle={css.scrollContent} showsVerticalScrollIndicator={false}>
                    <CardNotificacao navigation={navigation} 
                                     titulo={'Solicitação'} 
                                     protocolo={'250122'} 
                                     texto={'Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.'} 
                    />
                    <CardNotificacao navigation={navigation} 
                                     titulo={'Solicitação'} 
                                     protocolo={'250122'} 
                                     texto={'Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.'} 
                    />
                    <CardNotificacao navigation={navigation} 
                                     titulo={'Solicitação'} 
                                     protocolo={'250122'} 
                                     texto={'Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.'} 
                    />
                    <CardNotificacao navigation={navigation} 
                                     titulo={'Solicitação'} 
                                     protocolo={'250122'} 
                                     texto={'Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.'} 
                    />
                    <CardNotificacao navigation={navigation} 
                                     titulo={'Solicitação'} 
                                     protocolo={'250122'} 
                                     texto={'Recebemos sua notificação e já iniciamos as operações. Em breve será recolhido o entulho.'} 
                    />
                </ScrollView>       
            </View>
        </CorpoUm>
    )
}