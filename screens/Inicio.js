import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'

const img = require("../assets/img/FONDO1.jpg")

export default function Inicio ({navigation}) {
  return (
    <View style={styles.fondo}>
    <ImageBackground source={img} style={styles.fotofondo} resizeMode='cover'>
      <Text style={styles.titulo}>DEMOCRACIA</Text>
      <Text style={styles.subtitulo}>El juego que nos recuerda que no siempre es buena idea</Text>
      {/* <Button title='Iniciar' style={styles.boton} /> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jugadores')}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Instrucciones')}>
        <Text style={styles.buttonText}>Como Jugar</Text>
      </TouchableOpacity>
      <Image source={require('../assets/img/LogoPngBlanco-sinfondo.png')} style={styles.logo}/>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  fotofondo: {
    ...StyleSheet.absoluteFillObject,
    width: '100%', 
    height: '80%',
  },
    titulo: {
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'red',
      marginTop: 50,
      marginBottom: 50,
    },
    subtitulo: {
      fontSize: 19,
      textAlign: 'center',
      color: 'white',
      marginTop: 10,
      padding: 10,
      marginBottom: 30,
    },
    fondo: {
      backgroundColor: '#28262C',
      height: 1500,
      paddingTop: 150,
    },
    button: {
      backgroundColor: '#AD343E',
      padding: 13,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    logo: {
      width: "50%",
      marginTop: "35%",
      marginLeft: "10%",
      height: "15%",
      alignSelf: 'center',
    },
  })