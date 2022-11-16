import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppName({newStyles}:any) {
  return (
    <View>
        {/* usuario es placeholder */}
        <Text style={{...newStyles, ...styles.mainText}}>Bienvenido denuevo [Usuario]!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        paddingTop:35,
        fontSize:25,
        color:'white',
        paddingLeft:10,
        backgroundColor:'rgb(51,51,51)'
    },
})