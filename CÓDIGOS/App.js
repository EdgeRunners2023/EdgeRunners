/* INSTALE AS SEGUINTES BIBLIOTECAS NO DIRETORIO DO PROJETO:
 * npm install --save @react-navigation/native
 * npm install --save react-native-screens react-native-safe-area-context
 * npm install --save react-navigation
 * *em caso de problemas com a instalação, remova "--save" do comando e execute novamente*
 * para mais detalhes consulte https://reactnavigation-org.translate.goog/docs/getting-started?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc&_x_tr_hist=true
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas/indexRotas';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    //CONTAINER QUE IRÁ ENVOLVER AS TELAS NEVEGAVEIS
    <NavigationContainer>
      <StatusBar backgroundColor='#0DFDC2'></StatusBar>
      <Rotas></Rotas>
    </NavigationContainer>
  );
};