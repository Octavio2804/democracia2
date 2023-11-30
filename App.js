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
import { gyroscope } from 'react-native-sensors';
import { ScreenOrientation } from 'expo';




const Stack = createStackNavigator();




export default function App() {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const gyroscopeObservable = new Gyroscope({ updateInterval: 100 });

    const subscription = gyroscopeObservable.subscribe(({ x, y, z }) => {
      setGyroscopeData({ x, y, z });
    });

    // Set the initial screen orientation when the component mounts
    setScreenOrientationAsync();

    return () => {
      subscription.unsubscribe();
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  useEffect(() => {
    // Check gyroscope data and change orientation accordingly
    if (gyroscopeData.y > 1.5) {
      changeOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    } else if (gyroscopeData.y < -1.5) {
      changeOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }
  }, [gyroscopeData]);

  const setScreenOrientationAsync = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  };

  const changeOrientation = async (orientationLock) => {
    await ScreenOrientation.lockAsync(orientationLock);
  };

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
