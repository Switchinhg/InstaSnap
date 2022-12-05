import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Item from './Item/Item'
import { GlobalStyles } from '../../Constantes/Styles'

interface Post{
    img:string
    acc:string
    desc:string
/* Todavia no definido */
}

const renderItem = (post:any ) =>{
    return <Item post={post} />
}

export default function Posts({posts}:any, ) {


return (
    <View style={styles.postWrap}>

        <FlatList
        data={posts}
        renderItem={renderItem}
        />
    </View>
    
)
}

const styles = StyleSheet.create({
    postWrap:{
        width:'100%',
        height:'85%',
        marginBottom:'40%'
    },
    color:{
        color:GlobalStyles.color,
        fontSize:50
    }
})