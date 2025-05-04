import React from "react";
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, ImageBackground } from 'react-native';
import css from './style';

export default function CorpoZero({ children, navigation, destino, titulo, labelConta, linkConta }) {
    return (
        <ImageBackground source={require('./../../assets/img/background_cidade2.jpg')} style={css.backgroundImagem} resizeMode="cover">
            <View style={css.container}>
                <KeyboardAvoidingView style={css.containerTeclado}
                                    behavior={Platform.OS === 'ios' ? 'padding' : null} 
                >
                    <ScrollView contentContainerStyle={css.scroll} 
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                    >
                            <View style={css.head}>
                                <Image source={require('./../../assets/img/logo_pmpa.png')} style={css.logo} resizeMode="contain"/>
                                <Text style={css.titulo}>ReportaCidadão</Text>
                            </View>

                            <View style={css.card}>
                                <View style={css.headCard}>
                                    <Text style={css.tituloCard}>{titulo}</Text>
                                </View>
                                
                                {children}

                                
                            </View>

                            <View style={css.bottom}>
                                <Text style={css.labelBtnBottom}>{labelConta}  </Text>
                                <TouchableOpacity style={css.btnCadastrar} onPress={()=>navigation.navigate(destino)}>
                                    <Text style={css.txtBtnBototm}>{linkConta}</Text>
                                </TouchableOpacity>
                            </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    )
}