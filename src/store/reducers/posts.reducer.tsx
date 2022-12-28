import {postsImport} from '../../Constantes/USER'
import { ADD_POST, BORRAR_POST} from '../actions/post.action'


const InitialState = {
    posts: postsImport
}

const PostsReducer = (state=InitialState ,action:any)=>{
    switch (action.type){
        case ADD_POST:
            postsImport.unshift(action.post)
    }
    return{
        ...state,
        post:action.post
    }
}
export default PostsReducer