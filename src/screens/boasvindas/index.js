import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import css from './style'

export default function Boasvindas({ navigation }) {
    return (
        <View style={css.container}>
            <View style={css.head}>
                <Image source={require('./../../assets/img/logo_prefeitura.png')} style={css.logo}></Image>
                <Text style={css.titulo}>Prefeitura  de</Text>
                <Text style={css.titulo2}>Paulo Afonso</Text>
                <Text style={css.titulo3}>B       A       H       I       A</Text>
            </View>
            <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                            start={{ x: 0, y: 0 }} // Canto superior esquerdo
                            end={{ x: 1, y: 1 }}
                            style={css.card}
            >   
                <View style={css.headCard}>
                    <Text style={css.tituloCard1}>Bem vindo ao</Text>
                    <Text style={css.tituloCard2}>ReportaCidadão</Text>
                </View>
                <View style={css.bodyCard}>
                    <Text style={css.textoCard}>
                        O "ReportaCidadão" é um aplicativo inovador que conecta cidadãos e prefeituras, facilitando a solicitação de serviços de infraestrutura urbana, sua participação como cidadão é incentivada, tornando o processo de solicitação de serviços mais eficiente e colaborativo. 
                    </Text>
                    <Text style={[css.texto2Card,{fontWeight: 'bold'}]}>
                        JUNTOS, CONSTRUIREMOS CIDADES MELHORES!
                    </Text>
                </View>
                <View style={css.bottomCard}> 
                    <TouchableOpacity style={css.btn} onPress={()=>navigation.navigate('Login')}>
                        <Text style={css.txtBtn}>AVANÇAR</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}