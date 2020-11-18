import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View,ScrollView } from 'react-native';

export default function Home() {
    return (
      <ScrollView style={styles.container}>
        <Button title='Cadastrar nova Ong'></Button>
  
       <Ong/>
       <Ong/>
       <Ong/>
  
      </ScrollView>
    );
  }
  
  const Ong = () =>{
  
    return(
      <View style={styles.empresa}>
  
      <Text style={styles.titulo} >Ong Pro anima</Text>
      <Text>Ong criada para resgatar animais em situação de vulnerabilibdade</Text>
  
     
      <Button title='Cadastrar voluntario'></Button>
      <Button title='Visualizar voluntarios'></Button>
       
       </View>
      
       
    );
  
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    empresa:{
      marginHorizontal:20,
      marginVertical:5,
      margin:20,
      padding:20,
      backgroundColor:'orange',
      borderRadius:20,
    },
    titulo:{
      fontSize:20,
      fontWeight:"bold",
    }
  });
  
  