import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image } from "react-native";
import { Button, Card } from "react-native-elements";

const paginaInicial = ({navigation}) => {
  return ( 
    <View style = {styles.container}>
    <Text style = {styles.titulo}>BIENVENIDOS</Text>
    <Image style={styles.image} source={require('../Imagenes/LogoApp.png')} />
    <Button 
        buttonStyle={{backgroundColor: '#227cb2' , borderRadius: 30, marginLeft: 0, marginRight: 0}}
        title="Continuar"
        onPress = {() => navigation.navigate('Paises')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#dbc61a"
  },

  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});

export default paginaInicial;