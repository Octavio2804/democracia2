import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { PlayerContext } from '../playercontext/PlayerContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firestore from '../firebase';

const img = require("../assets/img/FONDO1.jpg");


const Juego = ({ route, navigation }) => {
  const { players } = React.useContext(PlayerContext);
  const [votes, setVotes] = React.useState({});
  const [currentTurn, setCurrentTurn] = React.useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [enunciadoText, setEnunciadoText] = useState('');
  const enunciadosRef = firestore.collection('Enunciados');

  useEffect(() => {
    setCurrentTurn(0);
    setSelectedOption(null);

    enunciadosRef.get()
      .then(querySnapshot => {
        const enunciadosArray = [];

        querySnapshot.forEach(doc => {
          enunciadosArray.push(doc.data().text);
        });

        if (enunciadosArray.length > 0) {
          const randomEnunciado = enunciadosArray[Math.floor(Math.random() * enunciadosArray.length)];
          setEnunciadoText(randomEnunciado);
        }
      })
      .catch(error => {
        console.error('Error fetching enunciados:', error);
      });
  }, [route]);

  React.useEffect(() => {
    if (currentTurn === players.length) {
      navigation.navigate('Resultado', { votes, players });
    }
  }, [currentTurn, players, navigation, votes]);

  const handleVote = (player) => {
    setSelectedOption((prevOption) => (prevOption === player ? null : player));
  };

  const submitVote = () => {
    if (selectedOption) {
      setVotes({ ...votes, [selectedOption]: (votes[selectedOption] || 0) + 1 });
      setCurrentTurn(currentTurn + 1);
      setSelectedOption(null);
    }
  };

  return (
    <View>
      <ImageBackground source={img} style={styles.fotofondo} resizeMode='cover'>
        <Text style={styles.enunciado}>Enunciado: {enunciadoText} </Text>
        <Text style={styles.turno}>Turno actual: {currentTurn + 1}</Text>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={[styles.botonvotar, selectedOption === item && styles.selectedOption]}
                onPress={() => handleVote(item)}
              >
                <Text style={styles.nombre}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          style={[styles.botonSubmit, { backgroundColor: selectedOption ? '#4281A4' : '#A9A9A9' }]}
          onPress={submitVote}
          disabled={!selectedOption}
        >
          <Text style={{ color: 'white' }}>Submit Vote</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  enunciado: {
    color: 'white',
    textAlign: 'center',
    margin: 25,
  },
  fotofondo: {
    height: '100%',
  },
  turno: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  nombre: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 7,
    margin: 7,
  },
  botonvotar: {
    backgroundColor: '#272727',
    borderWidth: 1,
    borderColor: '#F2EFEA',
    margin: 20,
  },
  botonSubmit: {
    backgroundColor: '#4281A4',
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'green',
  },
});

export default Juego;