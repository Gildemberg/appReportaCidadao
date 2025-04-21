import React from "react";
import { View, Text, TextInput } from 'react-native';
import Corpo from './../../components/corpoZero'

import css from './style';

export default function CadastrarConta({ navigation }) {
    return (
            <Corpo navigation={ navigation } 
                    destino={ 'Login' }
                    titulo={'Criar Conta'}
                    labelBtn={'CADASTRAR'}
                    labelConta={'Já possui conta?'}
                    linkConta={'Faça login aqui.'}
            >
                <View style={css.bodyCard}>
                    <Text style={css.label}>Nome</Text>
                    <TextInput style={css.input} placeholder="Insira seu nome" placeholderTextColor={'#c4c4c4'}></TextInput>
                    <Text style={css.label}>CPF</Text>
                    <TextInput style={css.input} placeholder="Insira seu cpf" placeholderTextColor={'#c4c4c4'}></TextInput>
                    <Text style={css.label}>Email</Text>
                    <TextInput style={css.input} placeholder="Insira seu email" placeholderTextColor={'#c4c4c4'}></TextInput>
                    <Text style={css.label}>Senha</Text>
                    <TextInput style={css.input} placeholder="Insira sua senha" placeholderTextColor={'#c4c4c4'}></TextInput>
                    <Text style={css.label}>Confirmar Senha</Text>
                    <TextInput style={css.input} placeholder="Insira sua senha novamente" placeholderTextColor={'#c4c4c4'}></TextInput>
                </View>
            </Corpo>
    )
}