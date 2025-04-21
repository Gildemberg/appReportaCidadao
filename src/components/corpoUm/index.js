import React from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import Navbar from "../../components/navbar";

export default ({ children }) => {
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
                        <Image source={require('./../../assets/img/foto.jpg')} style={css.foto}/>   
                        <Text style={css.nome}>Gildemberg</Text>
                        <Text style={css.cpf}>091.567.201-32</Text>
                    </View>
                    <View style={css.body}>
                        {children}
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}