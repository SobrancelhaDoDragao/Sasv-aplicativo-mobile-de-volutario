import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>

      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>
      
      <View style={styles.empresa}>

        <Text style={styles.titulo} >Nome empresa</Text>
        <Text>Descrição</Text>
        

      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  empresa:{
    marginHorizontal:20,
    marginVertical:10,
    margin:20,
    padding:20,
    backgroundColor:'green',
    borderRadius:3,
  },
  titulo:{
    fontSize:20,
    fontWeight:"bold",
  }
});
