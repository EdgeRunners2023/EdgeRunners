import { StyleSheet } from "react-native";
//OBSERVAÇÃO, A SIGLA "ipt" QUER DIZER "input"
//ESTILIZAÇÃO DOS COMPONENTES DA TELA DE CADASTRO
const ESTILOS = StyleSheet.create({
    container: {//CONTAINER QUE AGRUPA TODOS OS COMPONENTES TA TELA
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
    separator: {//ATRIBUTOS DA FUNÇÃO DE SERARAPÇAÕ
        marginVertical: 20,
    }, 
    iptContainer: {//CONTAINER QUE GUARDA OS INPUTS
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '60%',
        justifyContent: 'center',
    },
    label: {//ESTILIZAÇÃO DA LABEL
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        left: 20
    },
    ipt: {//INPUTS
        backgroundColor: '#B0C4DE',
        width: '95%',
        height: 50,
        borderRadius: 10,
        left: 7,
        paddingLeft: 20
    },
    btnInput: {//ESTILIZAÇÃO DO BOTÃO DE CADASTRAR
        width: '60%',
        height: '10%',
        backgroundColor: '#0DFDC2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 40,
        left: 75
    },
       
    btnText: {//ESTILIZAÇÃO DO TEXTO DO BOTÃO DE CADASTRAR
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
        },
    
    imgContainer: {//ESTILIZAÇÃO DO CONTAINER DA IMAGEM DO USUÁRIO
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
        },
    IMG: {//ESTILIZAÇÃO DA IMAGEM DO USUÁRIO
        width: 200,
        height: 200,
        marginTop: 50,
    },
    textImg: {//ESTILIZAÇÃO DO TEXTO QUE IRÁ SER O NOME DO USUÁRIO
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5
    },
});

export default ESTILOS;