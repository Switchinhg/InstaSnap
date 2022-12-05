import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Constantes/Styles'

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buscar Contenido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:GlobalStyles.BgColor,
    paddingBottom:'20%'
  },
  text:{
    color:GlobalStyles.color,
    fontSize:30
  }
})