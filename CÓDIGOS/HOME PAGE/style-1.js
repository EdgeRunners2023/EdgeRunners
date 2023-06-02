import { StyleSheet } from "react-native";

//ESTILIZAÇÃO DA IMAGEM DE ICONE DO USUÁRIO
const STYLES = StyleSheet.create({
    imagem: {//ESTILIZAÇÃO DA IMAGEM NO ICONE
        width: 80,
        height: 80,
        borderRadius: 50,
    },

    area: {//ESTILIZAÇÃO DA ÁREA DO USUÁRIO
        marginTop: 35,
        backgroundColor: '#0DFDC2',
        width: '90%',
        height: '10%',
        borderRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
      
    texto: {//ESTILIZAÇÃO DOS TEXTOS DA ÁREA DO USUÁRIO
        color: '#000000',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    areas: {//ESTILIZAÇÃO DA ÁREA DOS BOTOÕES DE AÇÃO
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        borderRadius: 15
      },
});

export default STYLES