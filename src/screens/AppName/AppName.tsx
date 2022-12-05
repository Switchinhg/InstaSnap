import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Constantes/Styles'

export default function AppName({newStyles}:any) {
  return (
    <View>
        {/* usuario es placeholder */}
        <Text style={{...newStyles, ...styles.mainText}}>Bienvenido denuevo Swicho!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        paddingTop:35,
        fontSize:25,
        color:GlobalStyles.color,
        paddingLeft:10,
        backgroundColor:GlobalStyles.BgColor
    },
})