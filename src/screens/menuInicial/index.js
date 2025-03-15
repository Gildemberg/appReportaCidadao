import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import Navbar from "../../components/navbar";

export default props => {
    return (
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
                <View style={css.tituloBody}>
                    <Text style={css.titulo}>ReportaCidadão</Text>
                </View>
                <View style={css.botoesBody}>
                    <View style={css.botaoBody}>
                        <TouchableOpacity style={css.btn}>
                            <View style={css.boxIcon}>
                                <Image source={require('./../../assets/icons/adicionar.png')} style={css.icon} />   
                            </View>
                            <Text style={css.txtBtn}>SOLICITAR SERVIÇO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={css.botaoBody}>
                        <TouchableOpacity style={css.btn}>
                            <View style={css.boxIcon}>
                                <Image source={require('./../../assets/icons/pesquisar.png')} style={css.icon} />   
                            </View>
                            <Text style={css.txtBtn}>CONSULTAR SOLICITAÇÕES</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={css.botaoBody}>
                        <TouchableOpacity style={css.btn}>
                            <View style={css.boxIcon}>
                                <Image source={require('./../../assets/icons/falando.png')} style={css.icon} />   
                            </View>
                            <Text style={css.txtBtn}>SUGESTÃO PARA O APP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={css.bottomBody}>
                </View>
            </View>
            <Navbar/>
        </LinearGradient>
    )
}