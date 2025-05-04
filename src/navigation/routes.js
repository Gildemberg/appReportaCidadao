import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import ButtonHome from './../components/buttonHome';

import Boasvindas from './../screens/boasVindas';
import Login from './../screens/login';
import CadastrarConta from './../screens/cadastrarConta';
import MenuInicial from './../screens/menuInicial';
import Ouvidoria from './../screens/ouvidoria';
import CaixaDeEntrada from './../screens/caixaDeEntrada';
import MinhaConta from './../screens/minhaConta';
import Mapa from './../screens/mapa';
import Servicos from '../screens/servicos';
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

            <Stack.Screen name='Servicos' component={Servicos}/>

            <Stack.Screen name='Localizacao' component={Localizacao}/>

            <Stack.Screen name='Informacoes' component={Informacoes}/>

            <Stack.Screen name='Resumo' component={Resumo}/>

            <Stack.Screen name='MinhasSolicitacoes' component={MinhasSolicitacoes}/>
            {/* <Stack.Screen name='MinhasSolicitacoes' component={MinhasSolicitacoes}/> */}

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
                                paddingTop:3,
                                backgroundColor: '#053283'
                            },
                            tabBarLabel: ()=>null,
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
            <Tab.Screen name='MinhasSolicitacoes' 
                        component={MinhasSolicitacoes}
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
                                <ButtonHome focused={focused}/>
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