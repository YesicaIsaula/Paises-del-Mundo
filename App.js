import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/components/screens/Home'
import Paises from './src/Components/Screens/Paises';
import resultadosBusqueda from './src/Components/Screens/Busqueda';

const Stack = createStackNavigator(); 

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenidos" component={Home} options={{title:"PAISES DEL MUNDO"}}/>
        <Stack.Screen name="Paises" component={Paises} options={{title:"Paises"}}/>
        <Stack.Screen name="Resultados" component={resultadosBusqueda} options={{title:"Paises"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}