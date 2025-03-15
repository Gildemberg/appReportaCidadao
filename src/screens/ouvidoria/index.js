import React from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';
import CorpoUm from './../../components/corpoUm';

export default props => {
    return (
        <CorpoUm>
            <Text style={css.titulo}>Ouvidoria</Text>
            <LinearGradient style={css.card}
                            colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                            start={{ x: 0, y: 0 }} 
                            end={{ x: 1, y: 1 }}
            >
                <Text style={css.texto}>Contatos</Text>
                <Text style={css.texto}>+55 (75) 3281-7754</Text>
                <Text style={css.texto}>ouvidoria@pauloafonso.gov</Text>
            </LinearGradient>   
            <View style={css.bottom}></View>        
        </CorpoUm>
    )
}