import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { fetchpaises }from '../../api';

const nombresPaises = ({navigation}) => {
  const [data, setData] = useState(null);
  const [name, setSearch] = useState("");

    const getData = async () => {
      const response = await fetchpaises();
  
      setData(response);
    };
  
    useEffect(() => {
      getData();
    }, []);

  return ( 
      <ScrollView style={styles.container}>
         <Searchbar placeholder="Buscar un pais por nombre ..." 
          value={name} onChangeText={setSearch} 
          onIconPress={() => navigation.navigate("Resultados", {name})}/>
          {data && data.map((country) => {
          return (
          <Card key = {country.numericCode}>
            <Text style={styles.titulo}>{country.name}</Text>
            <Card.Image style={styles.bandera} source={country.flag}/>
            <Card.Divider/>
            <Text style={styles.texto}>Codigo de Pais: {country.alpha2Code}</Text>
            <Text style={styles.texto}>Capital: {country.capital}</Text>
            <Text style={styles.texto}>Población: {country.population} personas</Text>
            <Text style={styles.texto}>Continente: {country.region}</Text>
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
    backgroundColor: "#dbc61a"
  },

  titulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  texto: {
    fontSize: 15
  },

  bandera: {
    borderWidth: 1,
  }
});

export default nombresPaises;



