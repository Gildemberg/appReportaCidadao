import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Corpo from './../../components/corpoZero'

import css from './style';

export default function CadastrarConta({ navigation }) {
    const [ nome, setNome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ senha2, setSenha2 ] = useState('');
    const [ erro, setErro ] = useState('');
    const [ token, setToken ]= useState('');

    function validarCampos(){
        if(nome==""){
            setErro("* Insira seu Nome.")
        } else if(cpf==""){
            setErro("* Insira seu CPF.")
        } else if(email==""){
            setErro("* Insira seu Email.")
        } else if(senha==""){
            setErro("* Insira sua Senha.")
        } else if(senha2!==senha){
            setErro("* As senha estão diferentes.")
        } else {
            setErro("")
            cadastrarUsuario();
        }
    }

    const cadastrarUsuario = () => {
        fetch('http://192.168.1.28:3000/api/usuarios/cadastrar',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "nome": nome,
                "cpf": cpf,
                "email": email,
                "senha": senha
            })
        })
        .then(res=>res.json())
        .then(data => console.log('Usuário criado:', data))
        .catch(err => console.error('Erro:', err));

        setNome('');
        setCpf('');
        setEmail('');
        setSenha('');
        setSenha2('');

        navigation.navigate('Login');
    }

    return (
            <Corpo navigation={ navigation } 
                    destino={ 'Login' }
                    titulo={'Criar Conta'}
                    labelConta={'Já possui conta?'}
                    linkConta={'Faça login aqui.'}
            >
                <View style={css.bodyCard}>

                    {erro != null && (
                        <Text style={css.alerta}>{erro}</Text>
                    )}

                    <Text style={css.label}>Nome</Text>
                    <TextInput style={css.input} placeholder="Insira seu nome" placeholderTextColor={'#c4c4c4'} value={nome} onChangeText={setNome}/>

                    <Text style={css.label}>CPF</Text>
                    <TextInput style={css.input} placeholder="Insira seu cpf" placeholderTextColor={'#c4c4c4'} value={cpf} onChangeText={setCpf}/>

                    <Text style={css.label}>Email</Text>
                    <TextInput style={css.input} placeholder="Insira seu email" placeholderTextColor={'#c4c4c4'} value={email} onChangeText={setEmail}/>

                    <Text style={css.label}>Senha</Text>
                    <TextInput style={css.input} placeholder="Insira sua senha" placeholderTextColor={'#c4c4c4'} value={senha} onChangeText={setSenha} secureTextEntry= {true}/>

                    <Text style={css.label}>Confirmar Senha</Text>
                    <TextInput style={css.input} placeholder="Insira sua senha novamente" placeholderTextColor={'#c4c4c4'} value={senha2} onChangeText={setSenha2} secureTextEntry= {true}/>

                    <TouchableOpacity style={css.btnCard} onPress={validarCampos}>
                        <Text style={css.txtBtnCard}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </Corpo>
    )
}