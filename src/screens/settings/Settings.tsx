import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../Constantes/Styles'

/* 

import edit from 'react-native-vector-icons/Entypo';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

*/
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="exchange" size={25} color="white" />;

const Settings = () => {
  const [nombre, setNombre] = useState<any>('Swicho')


  return (
    <View style={styles.Container}>
      <View>
        <Pressable
          onPressIn={() => {
            console.log('abrir galeria')
          }}
        /* Estilo cuando se apreta */
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : GlobalStyles.Bg2
          },
        styles.imagen]}>
          {/* Imagen placeholder */}
          <Image
          style={styles.img}
          source={ require('../Profile/pic.png')}/>
          {myIcon}
        </Pressable>
      </View>
      <View style={styles.changeText}>
        <TextInput
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
          placeholder="Nombre Obligatorio"
          keyboardType="default"
        />
        <Button title='Enviar' onPress={()=>console.log('cambiar nombre')}></Button>
      </View>
    </View>

    
  )
}

export default Settings

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    backgroundColor:GlobalStyles.BgColor,
    alignItems:'center',
    paddingTop:20
    
  },
  texts:{
    color:GlobalStyles.color

  },
  imagen:{
    width:100,
    height:100,
    borderWidth:1,
    borderColor:GlobalStyles.color,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:100,
    height:100,
    opacity:0.3,
    position:'absolute'
  },
  input:{
    color:GlobalStyles.color,
    fontSize:20,
    minWidth:200,

  },
  changeText:{
    flexDirection:'row',
    borderColor:'white',
    borderWidth:1,
    padding:10,
    margin:20
  }

})