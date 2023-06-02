import { StyleSheet } from "react-native";
//ESTILIZAÇÃO DA TELA DE ESTOQUE
const listStyle = StyleSheet.create({
    container: {//CONTAINER ONDE SERÃO EXIBIDOS TODOS OS COMPONENTES
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    listContainer: {//ESTLIZAÇÃO DOS CONTAINERS QUE GUARDAM OS ITENS DA LISTA
        backgroundColor: '#909090',
        height: 130,
        margin: 10,
        justifyContent: 'center',
        paddingLeft: 15,
        borderRadius: 10,
    },
    listText: {//ESTILIZAÇÃO DOS TEXTOS DA LISTA
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 3
    },
    title: {//ESTILIZAÇÃO DO TITULO DA TELA
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 60,
    },
    containerTop: {//ESTILIZAÇÃO CONTAINER QUE GUARDAO ITEM E A BARRA DE PESQUISA
        alignItems: 'center'
    },
    searchInput: {//ESTILIZAÇÃO DA BARRA DE PESQUISA
        padding: 10,
        backgroundColor: '#DCDCDC',
        width: '70%',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    containerBtn: {//ESTILIZAÇÃO DO CONTAINER QUE GUARDA O BOTÃO DE REGISTRO
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnInput: {//ESTILIZAÇÃO DO BOTÃO QUE FAZ O REGISTRO
        width: '70%',
        height: 70,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#0DFDC2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {// ESTILIAÇÃO DO TEXTO DO BOTÃO QUE FAZ O REGITRO
        fontWeight: 'bold',
        fontSize: 20,
        color: '#4F4F4F',
    }
});

export default listStyle;
