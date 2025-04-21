import React from "react";
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import css from './style';

export default function CorpoZero({ children, navigation, destino, titulo, labelConta, linkConta, labelBtn }) {
    return (
        <KeyboardAvoidingView
                    style={css.containerTeclado}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                >
            <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                            start={{ x: 0, y: 0 }} 
                            end={{ x: 1, y: 1 }}
                            style={css.container}
            >
                <ScrollView contentContainerStyle={css.scroll} 
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                >
                        <View style={css.head}>
                            <Image source={require('./../../assets/img/logo_prefeitura.png')} style={css.logo} resizeMode="contain"/>
                            <Text style={css.titulo}>ReportaCidadão</Text>
                        </View>

                        <View style={css.card}>
                            <View style={css.headCard}>
                                <Text style={css.tituloCard}>{titulo}</Text>
                            </View>
                            
                            {children}

                            <TouchableOpacity style={css.btnCard} onPress={()=>navigation.navigate('Tabs')}>
                                <Text style={css.txtBtnCard}>{labelBtn}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={css.bottom}>
                            <Text style={css.labelBtnBottom}>{labelConta}  </Text>
                            <TouchableOpacity style={css.btnCadastrar} onPress={()=>navigation.navigate(destino)}>
                                <Text style={css.txtBtnBototm}>{linkConta}</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}