import { StyleSheet, Text, View ,Button, TouchableOpacity, Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import { GlobalStyles } from '../../Constantes/Styles'

import * as ImagePicker from 'expo-image-picker';

// import { postsImport } from '../../Constantes/USER';

import { useDispatch } from 'react-redux';
import { addPost } from '../../store/actions/post.action';



// import { Camera, CameraType,onCameraReady } from 'expo-camera';


export default function Upload() {
  const dispatch = useDispatch();
  const [image, setImage] = useState<any>();
  const [status, requestPermission] = ImagePicker.useCameraPermissions();


  useEffect(() => {
    requestPermission()
  }, [])
  


  async function uploadPhoto() {
    const result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    console.log('upload',result);
  }


  const openCamera = async () =>{
    <h1>Hi!</h1>

    const result:any = await ImagePicker.launchCameraAsync({      
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.cancelled){
      setImage(result.uri);
      const post = {
        img:result.uri,
        acc:'Swicho',
        desc:'test'
      }
      dispatch(addPost(post))

    }
  }



  return (

    <View style={styles.container}>
      {/* <Camera style={{width:'50%',height:'50%'}} type={type}>  */}
      <View >
          <TouchableOpacity  onPress={uploadPhoto}>
            <Text style={styles.text}>Upload Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={openCamera}>
            <Text style={styles.text}>Take a Selfie!</Text>
          </TouchableOpacity>
        </View>

      {/* </Camera> */}
      {/* <Button title='Abrir Camara' onPress={buttonCamer}/> */}
      {/* <Text style={styles.text}>Subir contenido</Text> */}
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