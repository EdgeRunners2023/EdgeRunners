//ARQUIVO DE CRIAÇÃO DOS BOTÕES DE AÇÃO
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

//COMPONENTE QUE CRIARA OS BOTÕES
const BOTOES = ({ title, color }) => {
    return (
      <TouchableOpacity  onPress={() => Alert.alert('AÇÃO DE EXEMPLO')} style={[btnEX.button, { backgroundColor: color }]}>
        <Text style={btnEX.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  };

//ESTILIZAÇÃO DOS BOTÕES E DE SEUS TEXTOS
const btnEX = StyleSheet.create({
    button: {//ESTILIAÇÃO DO BOTÃO
        borderRadius: 15,
        height: '10%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 65
    },
    btnText: {//ESTILIAÇÃO DO TEXTO DO BOTÃO
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });

  export default BOTOES;