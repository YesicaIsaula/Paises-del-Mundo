import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, ScrollView, Image } from "react-native";
import { busquedaPais } from '../../api';
import { Card } from 'react-native-elements';

const resultadosBusqueda = ({navigation, route}) => {
    const {name} = route.params;
    const [pais, setPais] = useState(null)

    const getPais = async () => {
      const result = await busquedaPais(name);

      setPais(result);
    }

    useEffect(() => {
        getPais();
    }, [name]);

    return (
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Resultados de busqueda</Text>
        {pais && pais.map((country) => {
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
}

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
      fontSize: 15,
    },

    card: {

    },
  
    bandera: {
      borderWidth: 1,
    }
  });

export default resultadosBusqueda;