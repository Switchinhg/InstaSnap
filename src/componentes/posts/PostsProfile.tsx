import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useMemo, useState} from 'react'
import Item from './Item/Item'
import { GlobalStyles } from '../../Constantes/Styles'

import {useSelector} from 'react-redux'

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

    const [refreshing, setRefreshing] = useState(false);



    const handleRefresh = () => {
        setRefreshing(true);

        // Perform the refresh operation here, such as fetching new data from an API.
        // Once the refresh operation is complete, set refreshing back to false.
        setTimeout(() => {
        setRefreshing(false);
        }, 1000);
    };

    const memoizedData = useMemo(()=>posts,[posts])


return (
    <View style={styles.postWrap}>

        <FlatList
        data={memoizedData}
        renderItem={renderItem}
        onRefresh={handleRefresh}
        refreshing={refreshing}
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