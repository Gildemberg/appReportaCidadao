import React from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';

export default ({ children, titulo, navigation })  => {
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
                            <TouchableOpacity style={css.btnVoltar}  onPress={()=>navigation.goBack()}>
                                <Image source={require('./../../assets/icons/seta-voltar.png')} style={css.voltar}/>   
                            </TouchableOpacity>
                            <Image source={require('./../../assets/img/logo_pmpa.png')} style={css.logo} resizeMode="contain"/>   
                            <Text style={css.titulo}>{titulo}</Text>
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