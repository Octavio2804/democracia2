import { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
const img = require("../assets/img/FONDO1.jpg");

const Resultado = ({ route, navigation }) => {
  const { votes, players } = route.params;

  const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b), '');

  // Check if there's a tie
  const isTie = Object.values(votes).filter((count) => count === votes[winner]).length > 1;

  useEffect(() => {
    if (isTie) {
      Alert.alert(
        'Empate',
        'Acá no hay balotaje, el proximo que elijan toma doble',
        [{ text: 'OK', onPress: () => navigation.navigate('Juego', { players }) }]
      );
    }
  }, [isTie, navigation, players]);

  return (
    <View>
      <ImageBackground source={img} style={styles.fotofondo} resizeMode='cover'>
        <Text style={styles.titulo}>EL PUEBLO HA HABLADO</Text>
        <Text style={styles.seleccionado}>Seleccionado: {winner}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Juego', { players })} style={styles.boton}>
          <Text style={styles.botontexto}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio', { players })} style={styles.boton}>
          <Text style={styles.botontexto}>Volver a Inicio</Text>
        </TouchableOpacity>
        <Image source={require('../assets/img/LogoPngBlanco-sinfondo.png')} style={styles.logo}/>
        <Text style={styles.mensaje}>(No te enojes con el juego, es culpa de tus amigos)</Text>
      </ImageBackground>
    </View>
  );
};

export default Resultado

const styles = StyleSheet.create({
  seleccionado: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    margin: 10,
    color: "white"
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    marginTop: 40,
    color: "white"
  },
  fotofondo: {
    width: '110%',
    height: '104%',
  },
  boton: {
    backgroundColor: '#AD343E',
    margin: 10,
    padding: 10,
    marginRight: 50,
  },
  botontexto: {
    textAlign: "center"
  },
  mensaje: {
    color: "grey",
    textAlign: "center",
    marginRight: 30,
    paddingTop: "13%"
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginTop: "40%",
  },
})