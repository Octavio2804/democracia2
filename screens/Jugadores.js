import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const img = require("../assets/img/FONDO1.jpg");
import Juego from './Juego';
import { PlayerContext } from '../playercontext/PlayerContext';

const Jugadores = ({ navigation }) => {
  const { players = [] } = React.useContext(PlayerContext);
  const {addPlayer, removePlayer } = useContext(PlayerContext);
  const [newPlayer, setNewPlayer] = React.useState('');

  const handleAddPlayer = () => {
    if (newPlayer.trim() === '') {
      Alert.alert('¿Qué hacés?', 'No escribiste nada...');
    } else {
      addPlayer(newPlayer);
      setNewPlayer('');
    }
  };

  const handleRemovePlayer = (player) => {
    removePlayer(player);
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={img} style={styles.fotofondo} resizeMode='cover'>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Ingresar jugadores</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nuevo jugador"
               value={newPlayer}
                onChangeText={(text) => setNewPlayer(text)}
             />
             <Button title="Agregar" color={"green"} onPress={handleAddPlayer} />
           </View>
           <Text style={styles.subtitle}>Lista de jugadores:</Text>
           <FlatList
             data={players}
             keyExtractor={(item, index) => index.toString()}
             renderItem={({ item }) => (
               <View style={styles.playerItem}>
                 <View style={styles.playerInfo}>
                   <Text style={styles.nombre}>{item}</Text>
                 </View>
                 <Button title="Eliminar" color={"red"} onPress={() => handleRemovePlayer(item)} />
              </View>
             )}
           />
         </View>
        </ImageBackground>

         <FlatList
           keyExtractor={(item, index) => index.toString()}
           renderItem={({ item }) => (
             <View>
                <Text>{item}</Text>
              </View>
           )}
         />
          <TouchableOpacity onPress={() => navigation.navigate('Juego', { players })} style={styles.empezar}><Text style={styles.empezarTexto}>Empezar juego</Text></TouchableOpacity>
          {/* <Button title='Empezar juego' onPress={() => navigation.navigate('Juego', { players })} /> */}
       </View>
  );
};

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  fotofondo: {
    ...StyleSheet.absoluteFillObject,
    width: '110%',
    height: '104%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28262C',
  },
  contentContainer: {
    padding: 20,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 5, 
    borderRadius: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  playerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 1,
  },
  nombre: {
    fontSize: 18,
    borderWidth: 1,
    padding: 3,
    color: 'black',
    fontFamily: 'serif',
  },
  empezar: {
    backgroundColor: "#20A39E",
    marginBottom: "3%",
    borderRadius: 10,
  },
  empezarTexto: {
    color: "black",
    fontSize: 20,
    padding: 10,

  }
});

export default Jugadores;





