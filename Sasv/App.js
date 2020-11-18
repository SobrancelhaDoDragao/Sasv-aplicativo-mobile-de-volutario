import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './views/Home';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
