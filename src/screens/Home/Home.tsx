import { StyleSheet, Text, View ,Button } from 'react-native'
import React , {useState, useEffect} from 'react'
import AppName from '../AppName/AppName'
import Posts from '../../componentes/posts/Posts'
import { GlobalStyles } from '../../Constantes/Styles'
import {postsImport} from '../../Constantes/USER'
/* Redux */
import {useSelector, useDispatch, connect} from 'react-redux'
/* /Redux */

export default function Home() {

  const PostsRedux = useSelector((state:any)=>state.posts.posts)

  // const [posts,setPosts] = useState<any>([])


  
  useEffect(() => {
    /* pido data a supabase */

    /* Then */
      // setPosts(PostsRedux)
  }, [])
  



  return (
    <>
<AppName newStyles={{fontFamily:'Pacifico-Regular'}}/>
    <View style={styles.container}>



      {/* Cambiar a posts de todos */}
        {<Posts posts={PostsRedux} />
      }
      
      
    </View>
      </>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:5,
    height:'100%',
    backgroundColor: GlobalStyles.BgColor
  },

})