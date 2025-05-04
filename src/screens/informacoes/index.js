import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import css from './style';
import Corpo from './../../components/corpoDois';
import { ListaSelecao } from 'react-native-lista-selecao-suspensa'

export default function Informacoes({ navigation, route }) {
    const dados = [
        {chave:'1', valor:'Recolher Entulho', desabilitado:true},
        {chave:'2', valor:'Limpeza da Rua'},
    ]

    return(
        <Corpo titulo={ route.params.titulo } navigation={ navigation }>
            <View style={css.container}>
                <Text style={css.titulo}>Informações</Text>


                <Text style={css.label}>Tipo de Serviço</Text>
                <ListaSelecao
                    setSelecionada={(val) => setSelecionado(val)} 
                    dados={dados} 
                    salvar="valor"
                    style={css.select}
                />

                <Text style={css.label}>Descrever o ocorrido</Text>
                <TextInput style={css.input} placeholder="" 
                            multiline
                            numberOfLines={4}/>

                <Text style={css.subtitulo}>OPICIONALMENTE VOCÊ PODE ANEXAR FOTOS DO OCORRIDO</Text>

                <View style={css.containerUpload}>
                    <TouchableOpacity style={css.btnUploadImagem}>
                        <Text style={css.txtUploadImagem}>Clique aqui para enviar uma imagem.</Text>
                        <Image style={css.icon} source={require('./../../assets/icons/upload.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUploadImagem}>
                        <Text style={css.txtUploadImagem}>Clique aqui para enviar uma imagem.</Text>
                        <Image style={css.icon} resizeMode="contain" source={require('./../../assets/icons/upload.png')}/>
                    </TouchableOpacity>
                </View>

                
                <TouchableOpacity style={css.btnProximo} onPress={()=>navigation.navigate('Localizacao', { titulo:route.params.titulo })}>
                    <Text style={css.txtBtnProximo}>PRÓXIMO</Text>
                </TouchableOpacity>
                
            </View>
        </Corpo>
    )
}