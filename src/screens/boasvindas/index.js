import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import css from './style'

export default function Boasvindas({ navigation }) {
    return (
        <ImageBackground source={require('./../../assets/img/background_cidade.jpg')} style={css.backgroundImagem} resizeMode="cover">
            <View style={css.container}>

                <Image source={require('./../../assets/img/logoname_pmpa.png')} style={css.logo} resizeMode="contain"></Image>

                <View style={css.card}>   
                    <Text style={css.titulo}>Bem vindo ao</Text>
                    <Text style={css.subtitulo}>ReportaCidadão</Text>

                    <Text style={css.textoCard}>
                        O "ReportaCidadão" é um aplicativo inovador que conecta cidadãos e prefeituras, facilitando a solicitação de serviços de infraestrutura urbana, sua participação como cidadão é incentivada, tornando o processo de solicitação de serviços mais eficiente e colaborativo. 
                    </Text>

                    <Text style={[css.texto2Card,{fontWeight: 'bold'}]}>
                        JUNTOS, CONSTRUIREMOS CIDADES MELHORES!
                    </Text>

                    <TouchableOpacity style={css.btn} onPress={()=>navigation.navigate('Login')}>
                        <Text style={css.txtBtn}>AVANÇAR</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </ImageBackground>
    )
}