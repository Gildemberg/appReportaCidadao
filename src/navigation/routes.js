import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import LinearGradient from "react-native-linear-gradient";

import Boasvindas from './../screens/boasVindas';
import Login from './../screens/login';
import CadastrarConta from './../screens/cadastrarConta';
import MenuInicial from './../screens/menuInicial';
import Ouvidoria from './../screens/ouvidoria';
import CaixaDeEntrada from './../screens/caixaDeEntrada';
import MinhaConta from './../screens/minhaConta';
import Mapa from './../screens/mapa';
import Categoria from './../screens/categoria';
import Localizacao from  './../screens/localizacao'
import Informacoes from  './../screens/informacoes'
import Resumo from  './../screens/resumo'
import MinhasSolicitacoes from  './../screens/minhasSolicitacoes'
import Historico from  './../screens/historico'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='Boasvindas'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Boasvindas' component={Boasvindas}/>

            <Stack.Screen name='Login' component={Login}/>

            <Stack.Screen name='CadastrarConta' component={CadastrarConta}/>

            <Stack.Screen name='Categoria' component={Categoria}/>

            <Stack.Screen name='Localizacao' component={Localizacao}/>

            <Stack.Screen name='Informacoes' component={Informacoes}/>

            <Stack.Screen name='Resumo' component={Resumo}/>

            <Stack.Screen name='MinhasSolicitacoes' component={MinhasSolicitacoes}/>

            <Stack.Screen name='Historico' component={Historico}/>

            <Stack.Screen name='Tabs' component={Tabs}/>
        </Stack.Navigator>
    )
}

function Tabs() {
    return(
        <Tab.Navigator initialRouteName='MenuInicial'
                        screenOptions={{
                            headerShown: false,
                            tabBarStyle:{
                                paddingTop:3
                            },
                            tabBarLabel: ()=>null,
                            tabBarBackground: ()=>(
                                <LinearGradient
                                    colors={['rgb(41, 107, 212)', 'rgb(76, 188, 128)', 'rgb(25, 128, 156)' ]}
                                    style={{ flex: 1 }}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                />
                            ),
                        }}
        >
            <Tab.Screen name='Ouvidoria' 
                        component={Ouvidoria}
                        options={{
                             tabBarIcon: ({focused}) => (
                               <Image source={ focused ? require('./../assets/icons/ouvidoria-select.png') : require('./../assets/icons/ouvidoria.png')} 
                                        style={{width: 24,height: 24,}}
                                />
                             ),
                          }}
            />
            <Tab.Screen name='CaixaDeEntrada' 
                        component={CaixaDeEntrada}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={ focused ? require('./../assets/icons/inbox-select.png') : require('./../assets/icons/inbox.png')} 
                                         style={{width: 24,height: 24,}}
                                 />
                              ),
                          }}
            />
            <Tab.Screen name='MenuInicial' 
                        component={MenuInicial}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={ focused ? require('./../assets/icons/home-select.png') : require('./../assets/icons/home.png')} 
                                        style={{width: 24,height: 24,}}
                                 />
                              ),
                          }}
            />
            <Tab.Screen name='Mapa' 
                        component={Mapa}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={ focused ? require('./../assets/icons/localizacao-select.png') : require('./../assets/icons/localizacao.png')} 
                                        style={{width: 24,height: 24,}}
                                 />
                              ),
                          }}
            />
            <Tab.Screen name='MinhaConta' 
                        component={MinhaConta}
                        options={{
                            tabBarIcon: ({focused }) => (
                                <Image source={ focused ? require('./../assets/icons/user-select.png') : require('./../assets/icons/user.png')} 
                                        style={{width: 24,height: 24,}}
                                 />
                              ),
                          }}
            />

        </Tab.Navigator>
    )
}