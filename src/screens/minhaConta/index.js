import React from "react";
import { Text, TextInput, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import CorpoUm from './../../components/corpoUm';

export default props => {
    return (
        <CorpoUm>
            <Text style={css.titulo}>Minha Conta</Text>
            
                    <View style={css.body}>
                        <Text style={css.label}>Nome</Text>
                        <TextInput style={css.input} placeholder="Insira seu nome"></TextInput>

                        <Text style={css.label}>CPF</Text>
                        <TextInput style={css.input} placeholder="Insira seu cpf"></TextInput>

                        <Text style={css.label}>Email</Text>
                        <TextInput style={css.input} placeholder="Insira seu email"></TextInput>
                    </View>
                    <View style={css.bottom}>
                    </View>
        </CorpoUm>
    )
}