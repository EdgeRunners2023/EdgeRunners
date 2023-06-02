import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import ESTILOS from './style';//IMPORTANDO A ESTLIZAÇÃO DOS COMPONENTES DA TELA

export default function Cadastro(){
    return(
//===========================================================TELA DO USUÁRIO===========================================================
        <View style={ESTILOS.container}>
        {/*CONTAINER QUE AGRUPA A IMAGEM*/}
            <View style={ESTILOS.imgContainer}>
            <Image style={ESTILOS.IMG} source={require('../cadastro/images.png')}></Image>
                <Text style={ESTILOS.textImg}>SEU NOME</Text>
            </View>
         {/*FIM DO CONTAINER QUE AGRUPA A IMAGEM*/}

        {/*CONTAINER QUE AGRUPA O FORMULÁRIO DE CADASTRO*/}
        <View style={ESTILOS.iptContainer}>
            <Text style={ESTILOS.label}>E-MAIL:</Text>
            <TextInput
                style={ESTILOS.ipt}
                placeholder='Insira seu e-mail'/>
                    <Separator/>
            <Text style={ESTILOS.label}>NOME:</Text>
            <TextInput
                style={ESTILOS.ipt}
                placeholder='Insira seu nome'/>
                    <Separator/>
            <Text style={ESTILOS.label}>SENHA:</Text>
                <TextInput
                    style={ESTILOS.ipt}
                    secureTextEntry={true}
                    placeholder='Insira sua senha'/>
            <TouchableOpacity
                onPress={() => Alert.alert('BOTÃO DE AÇÃO')}
                style={ESTILOS.btnInput}>
                    <Text style={ESTILOS.btnText}>ENTRAR</Text>
            </TouchableOpacity>
            </View>
        {/*FIM DO CONTAINER QUE AGRUPA O FORMULÁRIO DE CADASTRO*/}
        </View>
//===========================================================FIM TELA DO USUÁRIO===========================================================
    );
};

const Separator = () => {//FUNÇÃO PARA SERPAR OS INPUTS, TEXTOS E O BOTÃO
    return <View style={ESTILOS.separator} />;
};