import React from "react";
import { Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import css from './style';

export default function ButtonHome({ focused }){
    return(
        <LinearGradient
            colors={['rgb(41, 107, 212)', 'rgb(76, 188, 128)', 'rgb(25, 128, 156)' ]}
            style={css.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Image source={ focused ? require('./../../assets/icons/home-select.png') : require('./../../assets/icons/home.png')} 
                   style={{width: 24,height: 24,}}
            />
        </LinearGradient>
    )
}