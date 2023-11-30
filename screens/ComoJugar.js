import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ComoJugar = () => {
  return (
    <ScrollView>
    <View style={styles.fondo}>
      <Text style={styles.titulo}>Instrucciones:</Text>
      <Text style={styles.texto}>Paso 1: Tener amigos (Dificil, lo sabemos)</Text>
      <Text style={styles.texto}>Paso 2: No tener nada mejor que hacer y descargar este juego (Por favor juegenlo, estoy desesperado)</Text>
      <Text style={styles.texto}>Paso 3: Leer esto:</Text>
      <Text style={styles.texto}>El juego es simple, primero se colocan los nombres de todos los jugadores que vayan a formar parte del juego. De ahi, el juego se encarga de poner un enunciado y los juadores van pasando el celular y votando a quien creeen que encaja mejor con lo dicho. Los votos puede ser copletamente anonimos, a menos que quieras humillar más a tu amigo y decir porque elegiste votar por él o ella.</Text>
      <Text style={styles.texto}>Al final de cada ronda todos estan obligados a tomar 1 trago por ejercer el deber civil</Text>
      <Text style={styles.texto}>El que obtiene los más votos toma unos inofensivos 2 tragos (A menos que quieran cambiarle las reglas. Es un pais libre, hagan lo que quieran)</Text>
      <Text style={styles.texto}>Si a uno lo eligen más de 3 veces en todo el juego, ese pasa a ser el presidente. Y por cada ronda que el lo siga siendo, pasa a tomar 4 tragos en vez de 1 al final de cada ronda. Cuando uno queda como presidente, todo el mundo volveria a tener 0 votos encima. Y el siguiente que salga elegido 3 veces pasa a ser el Presidente</Text>
      <Text style={styles.texto}>Si el que es presidente lo vuelven a elegir 3 veces mientras sigue siendo Presidente, sus tragos pasan, de 4 a 6. Y asi sucesivamente se van sumando de a 2 tragos. Hasta que haya otro presidente.</Text>
      <Text style={styles.texto}>Asi que si todos quieren ponerse de acuerdo apra arruinarle la noche a alguien, ya saben como</Text>
      <Text style={styles.texto}>Poco más que eso gente, disfruten</Text>
      <Image source={require('../assets/img/muchotexto.jpg')} style={styles.img}/>
      <Text style={styles.textoimg}>(Ya se que el meme es viejo, pero igual sirve)</Text>
    </View>
    </ScrollView>
  )
}

export default ComoJugar

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#28262C',
        padding: 10
    },
    titulo: {
        textAlign: 'center',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#CD533B',
        fontSize: 25,
    },
    texto: {
        color: 'white',
        margin: 15,
    },
    img: {
        width: 200,
        alignSelf: 'center'
    },
    textoimg: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center'
    }
})