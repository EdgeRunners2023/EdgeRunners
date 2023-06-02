import React, { Component } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import listStyle from './style';

//OBSERVAÇÃO: OS ITENS PRESENTES ÃO MERAMENTE ILUSTRATIVOS, AS DEMAIS FUNÇÕES AINDA SERÃO ADICONADAS 
export default class Delete extends Component{
    constructor(props){//CRIAÇÃO DA LISTA ILUSTRATIVA
        super(props)
        this.state = {
            produtos: [//ARREY COM OS OBJETO QUE IRÃO COMPOR A LISTA
                {
                    nome: 'Coxinha',
                    quantidade: 3,
                    tipo: 'Salgado',
                    preco: 2.50
                },
                {
                    nome: 'Pastel',
                    quantidade: 4,
                    tipo: 'Salgado',
                    preco: 3.00
                },
                {
                    nome: 'Bolo',
                    quantidade: 6,
                    tipo: 'Doce',
                    preco: 4.00
                },
                {
                    nome: 'Coxinha',
                    quantidade: 3,
                    tipo: 'Salgado',
                    preco: 2.50
                },
                {
                    nome: 'Pastel',
                    quantidade: 4,
                    tipo: 'Salgado',
                    preco: 3.00
                },
                {
                    nome: 'Bolo',
                    quantidade: 6,
                    tipo: 'Doce',
                    preco: 4.00
                },
                {
                    nome: 'Coxinha',
                    quantidade: 3,
                    tipo: 'Salgado',
                    preco: 2.50
                },
                {
                    nome: 'Pastel',
                    quantidade: 4,
                    tipo: 'Salgado',
                    preco: 3.00
                },
                {
                    nome: 'Bolo',
                    quantidade: 6,
                    tipo: 'Doce',
                    preco: 4.00
                },
                {
                    nome: 'Coxinha',
                    quantidade: 3,
                    tipo: 'Salgado',
                    preco: 2.50
                },
                {
                    nome: 'Pastel',
                    quantidade: 4,
                    tipo: 'Salgado',
                    preco: 3.00
                },
                {
                    nome: 'Bolo',
                    quantidade: 6,
                    tipo: 'Doce',
                    preco: 4.00
                },
                {
                    nome: 'Coxinha',
                    quantidade: 3,
                    tipo: 'Salgado',
                    preco: 2.50
                },
                {
                    nome: 'Pastel',
                    quantidade: 4,
                    tipo: 'Salgado',
                    preco: 3.00
                },
                {
                    nome: 'Bolo',
                    quantidade: 6,
                    tipo: 'Doce',
                    preco: 4.00
                },
            ]
        }
    }
    render(){//COMPONENTE DE RENDERIZAÇÃO DA LISRA
        return(
//===========================================================TELA TOTAL===========================================================
            /*=======================================CABEÇALHO DA TELA=======================================*/
            <View style={listStyle.container}>
                <View style={listStyle.containerTop}>
                    <Text style={listStyle.title}>ESTOQUE</Text>
                    <TextInput
                        style={listStyle.searchInput}
                        placeholder='Pesquisar...'
                        placeholderTextColor={'#202020'}
                    ></TextInput>
                </View>
                {/*=======================================FIM DO CABEÇALHO DA TELA=======================================*/}

                {/*=======================================LISTA DE ITENS=======================================*/}
                <FlatList
                    data={this.state.produtos}
                    renderItem={({item}) => 
                    <View style={listStyle.listContainer}>
                        <Text style={listStyle.listText}>Nome: {item.nome}</Text>
                        <Text style={listStyle.listText}>Quantidade: {item.quantidade}</Text>
                        <Text style={listStyle.listText}>Tipo: {item.tipo}</Text>
                        <Text style={listStyle.listText}>Preço: {item.preco}</Text>    
                    </View>
                    }
                ></FlatList>
                {/*=======================================FIM DA LISTA DE ITENS=======================================*/}

                {/*=======================================BOTÃO DE AÇÃO=======================================*/}
                <View style={listStyle.containerBtn}>
                <TouchableOpacity 
                    onPress={() => Alert.alert('BOTÃO DE AÇÃO')}
                    style={listStyle.btnInput}>
                        <Text style={listStyle.btnText}>GERAR RELATORIO</Text>
                </TouchableOpacity>
                </View>
                {/*=======================================BOTÃO DE AÇÃO=======================================*/}
            </View>
//===========================================================FIM DA TELA TOTAL===========================================================
        );
    };
};