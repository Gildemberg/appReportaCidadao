import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import css from './style';
import CorpoUm from './../../components/corpoUm';

export default function MenuInicial({ navigation }) {
    return (
            <CorpoUm>
                <View style={css.tituloBody}>
                    <Text style={css.titulo}>ReportaCidadão</Text>
                </View>
                <View style={css.botoesBody}>
                    <View style={css.botaoBody}>
                        <TouchableOpacity style={css.btn} onPress={()=>navigation.navigate('Categoria')}>
                            <View style={css.boxIcon}>
                                <Image source={require('./../../assets/icons/adicionar.png')} style={css.icon} />   
                            </View>
                            <Text style={css.txtBtn}>SOLICITAR SERVIÇO</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={css.botaoBody}>
                        <TouchableOpacity style={css.btn} onPress={()=>navigation.navigate('MinhasSolicitacoes')}>
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
            </CorpoUm>
    )
}