import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState}from 'react'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Upload from '../upload/Upload'
import Search from '../search/Search'

export default function Navegacion({changePage}:any) {
  const [pressed,setrPressed] = useState('home')

    const handlePress=(pageName:any,stringActive:string)=>{
      changePage(pageName)
      setrPressed(stringActive)
    }
  return (
    <View style={styles.view}>
              <Pressable
                style={styles.link}
                onPress={()=>handlePress(<Home /> , 'home')}
              >
              {pressed==='home'?
                <Text style={{ color: "rgb(96,181,59)" }}>Home</Text>
              :  
                <Text style={{ color: "white" }}>Home</Text>
              }
              </Pressable>

              <Pressable
                style={styles.link}
                onPress={()=>handlePress(<Search/>, 'search')}
              >
              {pressed==='search'?
                <Text style={{ color: "rgb(96,181,59)" }}>Search</Text>
              :  
                <Text style={{ color: "white" }}>Search</Text>
              }
              </Pressable>

              <Pressable
                style={styles.link}
                onPress={()=>handlePress(<Upload/>,'upload')}
              >
              {pressed==='upload'?
                <Text style={{ color: "rgb(96,181,59)" }}>Upload</Text>
                :  
                <Text style={{ color: "white" }}>Upload</Text>
              }
              </Pressable>

              <Pressable
                style={styles.link}
                onPress={()=>handlePress(<Profile/>,'Profile')}
              >
              {pressed==='Profile'?
              <Text style={{ color: "rgb(96,181,59)" }}>Profile</Text>
              :  
              <Text style={{ color: "white" }}>Profile</Text>
              }
              </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        bottom:0,
        width:'100%',
        padding:10
    },
    link:{
        padding: 20,
        color:'white',

    }
})