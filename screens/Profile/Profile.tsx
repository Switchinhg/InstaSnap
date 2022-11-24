import { StyleSheet, Text, View,  Image, Button } from 'react-native'
import React from 'react'
import Settings from '../settings/Settings';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();



/* tener usuario activo */
export default function Profile({navigation}:any) {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <View style={styles.userPart}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.userLogo}
            source={ require('./pic.png')}/>
        </View>
        <View style={styles.userContainer}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.text}>Swicho</Text>
          

          <Button title="*" onPress={() => navigation.navigate("Settings")} />
{/* style={{...styles.text2, paddingLeft:20,fontSize:40}} */}
          </View>
          <Text style={styles.text2}>14 Posts</Text>
          <Text style={styles.text2}>57 Seguidores</Text>
          <Text style={styles.text2}>60 Siguiendo</Text>
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:'rgb(51,51,51)',
    paddingBottom:'20%',
    alignItems:'center',
    paddingTop:40,
  },
  text:{
    color:'white',
    fontSize:35
  },
  text2:{
    color:'white',
    fontSize:17
  },
  imageContainer:{
    width:'40%'
  },
  userContainer:{
    width:'45%',
    paddingTop:10
  },
  userLogo:{
    width:100,
    height:100,
    margin:10
  },
  userPart:{
    flexDirection:'row'
  }
})