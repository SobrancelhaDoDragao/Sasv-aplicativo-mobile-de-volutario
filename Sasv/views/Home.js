import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View,ScrollView, FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
  //Criando uma ong individual
  const [ong,updateOng] = useState({Titulo:'',Descricao:''});
  //Criando o array para adicionar as ongs
  const [ongs,updateOngs] = useState([]);
  
  //const RenderOng = ({ong}) =>  <Text>{ong}</Text>;
  const CriarOng = () =>{
    updateOngs([...ongs,ong]);
  }
    console.log(ong)
    return (
      <View style={styles.container}>
        <Text>Nome:</Text>
        <TextInput onChangeText={text =>updateOng({...ong,Titulo:text})}></TextInput>

        <Text>Descrição:</Text>
        <TextInput onChangeText={text =>updateOng({...ong,Descricao:text})}></TextInput>
        
        <Button onPress={CriarOng} title="Criar ong" color='coral' ></Button>
        
        <FlatList data={ongs}  renderItem={({item}) => <Ong Titulo={item.Titulo} Descricao={item.Descricao}/>} keyExtractor= {(item)=> item.Titulo} />
      
      </View>
    
    );
  }
  
  const Ong = (props) =>{
  
    return(
      <View style={styles.empresa}>
  
      <Text style={styles.titulo}>{props.Titulo}</Text>
      <Text>{props.Descricao}</Text>
  
     
      <Button title='Contribuir'></Button>
    
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
  
  