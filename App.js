import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MantenerPlayers } from './playercontext/PlayerContext';
import Inicio from './screens/Inicio';
import ComoJugar from './screens/ComoJugar';
/* import { Image } from 'react-native-web'; */
import Jugadores from './screens/Jugadores';
import Resultado from "./screens/Resultado"
import Juego from './screens/Juego';


const Stack = createStackNavigator();


export default function App() {
  return (

    <MantenerPlayers>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Inicio'
          component={Inicio}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Instrucciones'
          component={ComoJugar}
          options={{
            title: "Como jugar",
            headerStyle: {
              backgroundColor: '#CD533B',
            },
            headerLargeTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen
          name='Jugadores'
          component={Jugadores}
          options={{
            headerStyle: {
              backgroundColor: '#CD533B',
            },
            headerLargeTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen
          name='Juego'
          component={Juego}
          options={{
             headerStyle: {
              backgroundColor: '#CD533B',
            },
            headerLargeTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />

        <Stack.Screen
          name='Resultado'
          component={Resultado}
          options={{
            headerShown: false,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  </MantenerPlayers>
  );
}
