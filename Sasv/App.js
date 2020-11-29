import React from 'react';
import Home from './views/Home';
import Contribuir from './views/Contribuir';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Home" component={Home}  options={{headerStyle:{backgroundColor:'coral'}, headerTintColor:'#333',headerTitleStyle:{alignSelf:'center'}}} />
      <Stack.Screen name="Contribuir" component={Contribuir}  options={{headerStyle:{backgroundColor:'coral'}, headerTintColor:'#333'}} />
      
      </Stack.Navigator>
  </NavigationContainer>
  )
};
