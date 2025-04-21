import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import css from './style';
import Corpo from './../../components/corpoUm';

export default function MinhaConta({ navigation }) {
    return (
        <Corpo>
            <Text style={css.titulo}>Minha Conta</Text>

            <View style={css.body}>
                <Text style={css.label}>Nome</Text>
                <TextInput style={css.input} placeholder="Insira seu nome" placeholderTextColor={'#b4b4b4'}></TextInput>

                <Text style={css.label}>CPF</Text>
                <TextInput style={css.input} placeholder="Insira seu cpf" placeholderTextColor={'#b4b4b4'}></TextInput>

                <Text style={css.label}>Email</Text>
                <TextInput style={css.input} placeholder="Insira seu email" placeholderTextColor={'#b4b4b4'}></TextInput>

                <TouchableOpacity style={css.btnSair} onPress={ ()=>navigation.navigate('Login')}>
                    <Text style={css.txtBtnSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </Corpo>  
    )
}