import { StyleSheet, Text, View } from 'react-native'
import React , {useState, useEffect} from 'react'
import Posts from '../../componentes/posts/Posts'

export default function Home() {
  const [posts,setPosts] = useState<any>([])

  /* Mock Data */
  const prods= [{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},{img:'https://picsum.photos/200/300',acc:'swicho',desc:'foto sacada ayer'},]
  
  useEffect(() => {
    /* pido data a supabase */

    /* Then */
      setPosts(prods)
 }, [])
  



  return (
    <View style={styles.container}>



        {posts &&
        <Posts posts={posts} />
        }
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:5,
    height:'93%',
    backgroundColor:'rgb(51,51,51)'
  },

})