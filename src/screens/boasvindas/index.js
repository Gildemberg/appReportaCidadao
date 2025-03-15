import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import css from './style'

export default props => {
    return (
        <View style={css.container}>
            <View style={css.head}>
                <Image source={require('./../../assets/img/logo_prefeitura.png')} style={css.logo}></Image>
                <Text style={css.titulo}>Prefeitura  de</Text>
                <Text style={css.titulo}>Paulo Afonso</Text>
                <Text style={css.titulo2}>B       A       H       I       A</Text>
            </View>
            <LinearGradient colors={['rgba(0, 81, 203, 0.69)', 'rgba(1, 160, 80, 0.53)','#rgba(1, 117, 146, 0.78)']}
                            start={{ x: 0, y: 0 }} // Canto superior esquerdo
                            end={{ x: 1, y: 1 }}
                            style={css.card}
            >   
                <View style={{flex:1}}>
                    <Text style={css.tituloCard1}>Bem vindo ao</Text>
                    <Text style={css.tituloCard2}>ReportaCidadão</Text>
                </View>
                <View style={{flex:15, justifyContent: 'center'}}>
                    <Text style={css.textoCard}>
                    O "ReportaCidadão" é um aplicativo inovador que conecta cidadãos e prefeituras, facilitando a solicitação de serviços de infraestrutura urbana, sua participação como cidadão é incentivada, tornando o processo de solicitação de serviços mais eficiente e colaborativo. Juntos, podemos construir cidades melhores!
                    </Text>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <TouchableOpacity style={css.btn}>
                        <Text style={css.txtBtn}>AVANÇAR</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}