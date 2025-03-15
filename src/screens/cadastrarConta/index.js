import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import css from './style';

export default props => {
    return (
        <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: 1 }}
                        style={css.container}
        >
            <KeyboardAvoidingView
                style={css.containerTeclado}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            >
                <ScrollView style={css.scroll} contentContainerStyle={css.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={css.head}>
                        <Image source={require('./../../assets/img/logo_prefeitura.png')} style={css.logo}/>
                        <Text style={css.titulo}>ReportaCidadão</Text>
                    </View>
                    <View style={css.card}>
                        <View style={css.headCard}>
                            <Text style={css.tituloCard}>Cadastrar Conta</Text>
                        </View>
                        <View style={css.bodyCard}>
                            <Text style={css.label}>Nome</Text>
                            <TextInput style={css.input} placeholder="Insira seu nome"></TextInput>

                            <Text style={css.label}>CPF</Text>
                            <TextInput style={css.input} placeholder="Insira seu cpf"></TextInput>

                            <Text style={css.label}>Email</Text>
                            <TextInput style={css.input} placeholder="Insira seu email"></TextInput>

                            <Text style={css.label}>Senha</Text>
                            <TextInput style={css.input} placeholder="Insira sua senha"></TextInput>

                            <Text style={css.label}>Confirmar Senha</Text>
                            <TextInput style={css.input} placeholder="Insira sua senha novamente"></TextInput>
                        </View>
                        <Pressable  style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, css.bottomCard]}>
                            <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                                    start={{ x: 0, y: 0 }} 
                                    end={{ x: 1, y: 1 }}
                                    style={css.btnCadastrar}
                                    >
                                <Text style={css.txtBtn}>CADASTRAR</Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                    <View style={css.bottom}>
                        <Text style={css.labelBtnEntrar}>Já possui conta?  </Text>
                        <TouchableOpacity style={css.btnEntrar}><Text style={css.txtBtnEntrar}>Realize login aqui.</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}