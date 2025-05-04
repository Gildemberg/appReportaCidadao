import React from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from "react-native";
import css from './style';

export default ({ children }) => {
    return (
        <KeyboardAvoidingView
                style={css.containerTeclado}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            >
            <ScrollView contentContainerStyle={css.scrollContent} 
                        showsVerticalScrollIndicator={false}>
                <View style={css.container}>
                    <ImageBackground source={require('./../../assets/img/background_ponte.jpg')} style={css.backgroundImagem} resizeMode="cover">
                        <View style={css.head}>
                            <Image source={require('./../../assets/img/foto.jpg')} style={css.foto}/>   
                            <View style={css.dados}>
                                <Text style={css.nome}>Gildemberg</Text>
                                <Text style={css.cpf}>091.567.201-32</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={css.body}>
                        {children}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}