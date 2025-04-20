import React from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';

export default ({ children, titulo })  => {
    return (
        <KeyboardAvoidingView
            style={css.containerTeclado}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        >
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                                    start={{ x: 0, y: 0 }} 
                                    end={{ x: 1, y: 1 }}
                                    style={css.container}
                                    >
                    <View style={css.head}>
                    <Image source={require('./../../assets/icons/seta-voltar.png')} style={css.voltar}/>   
                        <Image source={require('./../../assets/img/logo_prefeitura.png')} style={css.logo}/>   
                        <Text style={css.titulo}>{titulo}</Text>
                    </View>
                    <View style={css.body}>
                        {children}
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}