import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View,ScrollView, FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Contribuir({navigation,route}) {
 
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>{route.params.ong.Titulo}</Text>
            <Text style={styles.titulo2} >Descricao</Text>
            <Text style={styles.descricao}>{route.params.ong.Descricao}</Text>
            <Text style={styles.titulo2}>Contato</Text>
            <Text style={styles.contato}>Entre em contato com  a ong para contribuir:</Text>
            <Text style={styles.contato}>{route.params.ong.Contato}</Text>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    titulo:{
        fontSize:50,
        fontWeight:"bold",
        textAlign:'center',
    },
    titulo2:{
        fontSize:20,
        width:'90%',
        fontWeight:"bold",
        marginHorizontal:20,
        textAlign:'center',
    },
    descricao:{
        fontSize:20,
        backgroundColor: '#e2e2e2',
        width:'90%',
        marginHorizontal:20,
        height:'50%',
        textAlign:'justify',
      },
    contato:{
        fontSize:15,
        width:'90%',
        marginHorizontal:20,
        fontWeight:"bold",
    }
 
  });
  
