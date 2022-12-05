import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Settings from '../settings/Settings';


const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor:'rgb(51,51,51)'
      }
      // headerShown: false
    }}
  >
      <Stack.Screen
        name='Perfil'
        component={Profile}
      />
      <Stack.Screen
        name='Configuración'
        component={Settings}
      />
      

   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})