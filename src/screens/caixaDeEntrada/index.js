import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import CorpoUm from './../../components/corpoUm';
import CardNotificacao from './../../components/cardNotificacao';

export default props => {
    return (
        <CorpoUm>
            <Text style={css.titulo}>Notificações</Text>
            <View style={css.body}>
                <ScrollView style={css.scroll} contentContainerStyle={css.scrollContent} showsVerticalScrollIndicator={false}>
                    <CardNotificacao/>
                </ScrollView>       
            </View>
        </CorpoUm>
    )
}