import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet,View} from 'react-native';
import HomeScreen from '../binary/screens/HomeScreen';
import BinaryScreen from '../binary/screens/BinaryScreen';

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BinaryScreen" component={BinaryScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  clock:{
    position:"absolute",
    top:0,
        left:0,
        color:'black',

  }
});