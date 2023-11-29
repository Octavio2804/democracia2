import { StatusBar } from 'expo-status-bar';
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
import 'firebase/firestore';
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCJyZbuWxXou9Aojh9N5l0-ng83fqsvk3k",
  authDomain: "democracia-a45f6.firebaseapp.com",
  projectId: "democracia-a45f6",
  storageBucket: "democracia-a45f6.appspot.com",
  messagingSenderId: "107206939490",
  appId: "1:107206939490:web:5f66ba2fc89866115a523b",
  measurementId: "G-TBJ6HL2TTZ"
};

/* // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

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
