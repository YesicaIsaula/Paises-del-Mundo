import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";


const paginaInicial = ({navigation}) => {
  return ( 
    <View style = {styles.container}>
    <Text style = {styles.titulo}>BIENVENIDOS</Text>
    <Button 
        buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0}}
        title="Continuar"
        onPress = {() => navigation.navigate('Paises')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#B7CBBF"
  },

  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },

  image: {
    width: "center",
    height: 400,
  },
});

export default paginaInicial;