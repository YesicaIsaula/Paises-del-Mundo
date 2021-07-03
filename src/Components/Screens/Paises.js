import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Card } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import fetchpaises from '../../api';

const nombresPaises = ({navigation, route}) => {
  const [data, setData] = useState(null);
  

    const getData = async () => {
      const response = await fetchpaises();
  
      setData(response);
    };
  
    useEffect(() => {
      getData();
    }, []);


  return ( 
      <ScrollView style={styles.container}>
        <Searchbar  placeholder="Busque un pais"/>
        {data && data.map((country) => {
          return (
          <Card key = {country.numericCode}>
            <Text style={styles.titulo}>{country.name}</Text>
            <Card.Image source={country.flag}/>
            <Card.Divider/>
            <Text>CODIGO DE PAIS: {country.alpha2Code}</Text>
            <Text>CAPITAL: {country.capital}</Text>
            <Text>POBLACION: {country.population}</Text>
            <Text>CONTINENTE: {country.region}</Text>
          </Card>
          );
        })}
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#B7CBBF"
  },

  titulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  texto: {
    fontSize: 15,
  },
});

export default nombresPaises;



