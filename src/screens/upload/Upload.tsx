import { StyleSheet, Text, View ,Button, TouchableOpacity, Image,Alert, TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import { GlobalStyles } from '../../Constantes/Styles'

import * as ImagePicker from 'expo-image-picker';

// import { postsImport } from '../../Constantes/USER';

import { useDispatch ,useSelector } from 'react-redux';
import { addPost } from '../../store/actions/post.action';


// import { Camera, CameraType,onCameraReady } from 'expo-camera';




export default function Upload() {

  const usuarioLogeado = useSelector((state:any)=>state.users.state.usuarioLogeado/* .usuarioLogeado */)

  const dispatch = useDispatch();
  
  const [Logged, setUsuarioLogeado] = useState<any>()
  const [image, setImage] = useState<any>();

  const [postDescription, setpostDescription] = useState<any>('');

// useEffect(()=>{
//   console.log("usuarioLogeado")
//   console.log(usuarioLogeado)
// },[])

if(!Logged){
  setUsuarioLogeado(usuarioLogeado)
  
}

  const pedirPermisos = async (accion:String) =>{
    if(accion === 'selfie'){
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if(status !== 'granted'){
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false
    }
    openCamera()
  }

  if(accion === 'upload'){
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(status !== 'granted'){
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false
    }

    uploadPhoto()
  }


    
  }

  async function uploadPhoto() {
    const result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }


  const openCamera = async () =>{
    const result:any = await ImagePicker.launchCameraAsync({      
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.cancelled){
      setImage(result.uri);
    }
  }

  const SendPost = () =>{
      const post = {
        img:image,
        acc:Logged.usuario,
        desc:postDescription
      }
      dispatch(addPost(post))

      setpostDescription('')
      setImage(null)

  }



console.log(image)

  return (

    <View style={styles.container}>
      <View style={{flexDirection:'row', padding:10}}>
          <TouchableOpacity style={styles.buttons}  onPress={()=>pedirPermisos('upload')}>
            <Text style={styles.text}>Subir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}  onPress={()=>pedirPermisos('selfie')}>
            <Text style={styles.text}>Camara</Text>
          </TouchableOpacity>
        </View>

       {image? <Image style={{width:200,height:200}} source={{uri:image}}/> : null} 

      {
      image? 
        <View>  
          <TextInput
            style={styles.input}
            onChangeText={setpostDescription}
            value={postDescription}
            placeholder='Descripción del Post'
            placeholderTextColor='white'
          />
          <Button title='Enviar Post' onPress={SendPost}/>
        </View>
        :
        null
      }

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
  },
  buttons:{
    padding:10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'white',
    color:'white',
    fontSize:20,
    minWidth:200
  },
})