import React from "react";
import { Image, View } from 'react-native';

import css from './style';

export default function ButtonHome({ focused }){
    return(
        <View style={css.button}>
            <Image source={ focused ? require('./../../assets/icons/home-select.png') : require('./../../assets/icons/home.png')} 
                   style={{width: 24,height: 24,}}
            />
        </View>
    )
}