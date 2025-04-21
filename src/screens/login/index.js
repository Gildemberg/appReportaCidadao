import React from "react";
import { View, Text, TextInput } from 'react-native';
import Corpo from './../../components/corpoZero';
import css from './style';

export default function Login({ navigation }) {
    return (
        <Corpo navigation={ navigation } 
                destino={ 'CadastrarConta' }
                titulo={'Login'}
                labelBtn={'ENTRAR'}
                labelConta={'Ainda não possui conta?'}
                linkConta={'Cadastre-se aqui.'}
        >
            <View style={css.bodyCard}>
                <Text style={css.label}>Email</Text>
                <TextInput style={css.input} placeholder="Insira seu email" placeholderTextColor={'#c4c4c4'}></TextInput>
                <Text style={css.label}>Senha</Text>
                <TextInput style={css.input} placeholder="Insira sua senha" placeholderTextColor={'#c4c4c4'}></TextInput>
            </View>                    
        </Corpo>    
    )
}