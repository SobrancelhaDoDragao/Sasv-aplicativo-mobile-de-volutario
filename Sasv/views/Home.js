import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View,ScrollView, FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Home({navigation}) {
 
  //Criando uma ong individual
  const [ong,updateOng] = useState({Titulo:'',Descricao:''});
  //Criando o array para adicionar as ongs
  const [ongs,updateOngs] = useState([]);
  
  //const RenderOng = ({ong}) =>  <Text>{ong}</Text>;
  const CriarOng = () =>{
    if(ong.Titulo != '' & ong.Descricao != ''){
      updateOngs([...ongs,ong]);
    }
  }

  const pressHandler = (key) =>{
    updateOngs((prevOngs)=>{  
  
    return prevOngs.filter(unico => unico.Titulo != key);
    
    });
  }
    
    return (
      <View style={styles.container}>

        <Text>Nome:</Text>
        <TextInput style={styles.input} onChangeText={text =>updateOng({...ong,Titulo:text})}></TextInput>

        <Text>Descrição:</Text>
        <TextInput style={styles.input} onChangeText={text =>updateOng({...ong,Descricao:text})}></TextInput>
        
        <Button onPress={CriarOng} title="Criar ong" color='coral' ></Button>


        <FlatList data={ongs}  renderItem={({item}) => <Ong navigation={navigation} item={item}  pressHandler={pressHandler} />} keyExtractor= {(item)=> item.Titulo} />
      
      </View>
    
    );
  }
  
  const Ong = ({item,pressHandler,navigation}) =>{
  
    return(
      <View style={styles.ong}>

      <TouchableWithoutFeedback  onPress={() => pressHandler(item.Titulo) }><Text style={styles.BotaoExcluir}>Apagar</Text></TouchableWithoutFeedback>

      <Text style={styles.titulo}>{item.Titulo}</Text>
      <Text style={styles.descricao}>{item.Descricao}</Text>
  
     
      <Button onPress={()=>navigation.navigate('Contribuir')} title='Contribuir'></Button>
    
       </View>
       
    );
  
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    BotaoExcluir:{
      backgroundColor:'white',
      padding:5,
      marginHorizontal:200,
      borderRadius:20,
      justifyContent:"center",
      textAlign:"center",
      borderWidth: 2,
      width:"30%",
    },
    descricao:{
      marginBottom:10,
    },
    ong:{
      marginHorizontal:20,
      marginVertical:5,
      margin:20,
      padding:20,
      borderWidth: 2,
      borderColor:'coral',
      backgroundColor:'white',
      borderRadius:9,
      marginBottom:10,
    },
    titulo:{
      fontSize:20,
      fontWeight:"bold",
    },
    input:{
      width:"80%",
      borderStartColor:"#fff",
      padding:7,
      marginBottom:15,
    },
 
  });
  
  