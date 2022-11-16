import { StyleSheet, Text, View ,Image,Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';


const windowWidth = Dimensions.get('window').width;

export default function Item({post}:any) {
    const text = {fontFamily:'AnticSlab-Regular'}

    const [fontsLoaded] = useFonts({
        'AnticSlab-Regular': require('../../../assets/Fonts/AnticSlab-Regular.ttf')
    })

    if(!fontsLoaded){
        return null
    }
return (
    <View style={styles.post}>
        <Text style={{...text,...styles.user}}>{post.item.acc} </Text>
        <Image style={styles.postImg} source={{uri:post.item.img}} />
        <Text style={{...text,...styles.description}}>{post.item.desc} </Text>
    </View>
)
}

const styles = StyleSheet.create({
    post:{
        backgroundColor:'rgba(27,27,27,0.3)',
        borderRadius: 8,

        paddingBottom:10,

        marginTop:0,
        margin:20,
    },
    user:{
        paddingLeft:10,
        color:'white',
        fontSize:50
    },
    postImg:{
        width:windowWidth-40,
        height:400,
        marginTop:10,
        marginBottom:10
    },
    description:{
        paddingLeft:10,
        fontSize:20,
        color:'white'
    }
})