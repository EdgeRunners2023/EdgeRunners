import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//MPORTANDO COMPONENTES ESTILOS DOS CONENTES DA INTERFACE
import STYLES from './style';
import BOTOES from './btns/btn';

export default function HomePage(){
    return(
//=================================================AREA DO USUÁRIO==================================================
    <View style={styles.container}>
      <View style={STYLES.area}>
        <Image source={require('./images.png')} style={STYLES.imagem}></Image>
        <Text style={STYLES.texto}>NOME DO USUÁRIO</Text>
    </View>
{/*================================================FIM AREA DO USUÁRIO============================================*/}

{/*==================================================BOTÕES DE AÇÃO===============================================*/}
      <View style={STYLES.areas}>
        <BOTOES title="ADICIONAR PRODUTO" color="#0D31FC" />
        <BOTOES title="CHECAR ESTOQUE" color="#015DE6" />
        <BOTOES title="HISTÓRICO" color="#0DA9FC" />
      </View>       
    </View>
//=====================================================FIM DOS BOTÕES DE AÇÃO===============================================
    );
};

//ESTILIZAÇÃO DA TELA DE FUNDO
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }
});