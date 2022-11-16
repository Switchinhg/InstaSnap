import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Upload() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Subir contenido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(51,51,51)',
    paddingBottom:'20%'
  },
  text:{
    color:'white',
    fontSize:30
  }
})