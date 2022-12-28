import {userImports} from '../../Constantes/USER'
import { SET_ACTIVE } from '../actions/user.action'

const InitialState = {
    user: userImports,
    usuarioLogeado: ''
    /* Quizas tenga que poner Usuario Logeado */
}

const UserReducer = (state=InitialState ,action:any)=>{
    switch (action.type){
        case SET_ACTIVE:
            // postsImport.unshift(action.post)
    }
    return{
        ...state,
        usuarioLogeado:action.user
    }
}
export default UserReducer