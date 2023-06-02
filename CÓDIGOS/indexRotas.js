/* INSTALE A SEGUINTE BIBLIOTEA PARA USAR O CÓDIGO:
 * npm install --save @react-navigation/native-stack
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO AS TELAS QUE SERÃO EXIBIDAS 
import HomePage from '../paginas/homePage/indexHome';
import Cadastro from '../paginas/cadastro/indexCad';

//CRIANDO A CONSTANTE "Stack" E A ATRIBUINDO O MÉTODO "createNativeStackNavigator"
const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen //ESTA É A ORDEM EM QUE AS TELAS SERÃO EXIBIDAS
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false}}
            ></Stack.Screen>
            <Stack.Screen
                name="Home Page"
                component={HomePage}
                options={{ headerShown: false}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}; 