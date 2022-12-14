import { StyleSheet, Text, View,  Image, Button, Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from '../../Constantes/Styles';
// import 

/* Redux */
import {useSelector, useDispatch, connect} from 'react-redux'
import Posts from '../../componentes/posts/Posts';
/* /Redux */

const Stack = createNativeStackNavigator();



/* tener usuario activo */
export default function Profile({navigation}:any) {
  const [Logged, setUsuarioLogeado] = useState<any>()
  const [PostsLogeado, setPostsLogeado] = useState<any>()
  const usuarioLogeadu = useSelector((state:any)=>state.users.usuarioLogeado)
  const PostsUsuarios = useSelector((state:any)=>state.posts.posts)
  const postUsuario = PostsUsuarios.filter((e:any)=>e.acc !== usuarioLogeadu[0].usuario )

  useEffect(() => {
    setUsuarioLogeado(usuarioLogeadu[0])
    setPostsLogeado(postUsuario)
  }, [])
  
  console.log("Logged")
  console.log(Logged)
  console.log("PostsLogeado")
  console.log(PostsLogeado)

  if(!Logged)
  return <></>

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
          <Text style={styles.text}>{Logged.usuario}</Text>
          

          <Pressable  onPress={() => navigation.navigate("Configuración")}>
            <Text style={styles.settings} >*</Text>
          </Pressable>
          {/* <Button title="*" onPress={() => navigation.navigate("Configuracion")} /> */}
          {/* <MyStack/> */}
{/* style={{...styles.text2, paddingLeft:20,fontSize:40}} */}
          </View>
          <Text style={styles.text2}>Posts: {Logged.posts}</Text>
          <Text style={styles.text2}>Seguidores: {Logged.seguidores}</Text>
          <Text style={styles.text2}>Siguiendo: {Logged.siguiendo}</Text>
        </View>
      </View>

      <View style={styles.testWrap}>
        <Posts posts={PostsLogeado} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:GlobalStyles.BgColor,
    paddingBottom:'20%',
    alignItems:'center',
  },
  text:{
    color:GlobalStyles.color,
    fontSize:35
  },
  text2:{
    color:GlobalStyles.color,
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
  },
  settings:{
    color:'rgb(74,161,247)',
    fontSize:40,
    marginLeft:10,
    paddingLeft:5,
    paddingRight:20
  },
  testWrap:{
    marginTop:40,
  },

})