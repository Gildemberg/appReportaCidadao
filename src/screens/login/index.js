import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
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
                                <Text style={css.tituloCard}>Login</Text>
                            </View>
                            <View style={css.bodyCard}>
                                <Text style={css.label}>Email</Text>
                                <TextInput style={css.input} placeholder="Insira seu email"></TextInput>

                                <Text style={css.label}>Senha</Text>
                                <TextInput style={css.input} placeholder="Insira sua senha"></TextInput>
                            </View>
                            <Pressable  style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, css.bottomCard]}>
                                <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                                        start={{ x: 0, y: 0 }} 
                                        end={{ x: 1, y: 1 }}
                                        style={css.btnEntrar}
                                >
                                    <Text style={css.txtBtn}>ENTRAR</Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                        <View style={css.bottom}>
                            <Text style={css.labelBtnCadastrar}>Ainda não possui conta?  </Text>
                            <TouchableOpacity style={css.btnCadastrar}><Text style={css.txtBtnCadastrar}>Castre-se aqui.</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
    )
}