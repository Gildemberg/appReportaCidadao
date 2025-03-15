import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import css from './style';

export default props => {
    return (
        <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={css.navbar}
        >
            <TouchableOpacity style={css.nav}>
            <Image source={require('./../../assets/icons/ouvidoria.png')} style={css.icon} />   
            </TouchableOpacity>

            <TouchableOpacity style={css.nav}>
            <Image source={require('./../../assets/icons/inbox.png')} style={css.icon} />   
            </TouchableOpacity>

            <View style={css.teste}>
                <LinearGradient colors={['rgba(0, 81, 203, 0.84)', 'rgba(1, 160, 80, 0.7)','#rgba(1, 117, 146, 0.91)']}
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 1, y: 1 }}
                    style={css.home}
                >
                    <TouchableOpacity style={css.homeBtn}>
                    <Image source={require('./../../assets/icons/home-select.png')} style={css.icon} />   
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <TouchableOpacity style={css.nav}>
            <Image source={require('./../../assets/icons/localizacao.png')} style={css.icon} />   
            </TouchableOpacity>

            <TouchableOpacity style={css.nav}>
            <Image source={require('./../../assets/icons/user.png')} style={css.icon} />   
            </TouchableOpacity>
        </LinearGradient>
    )
}