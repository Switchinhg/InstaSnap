import {userImports} from '../../Constantes/USER'
import { SET_ACTIVE } from '../actions/user.action'

const InitialState = {
    users: userImports,
    usuarioLogeado: {id:1,usuario:"swicho",posts:14,seguidores:57,siguiendo:60}/* Seria un UID quizas */
    /* Quizas tenga que poner Usuario Logeado  de Firebase */
}

const UserReducer = (state=InitialState ,action:any)=>{
    switch (action.type){
        case SET_ACTIVE:
            console.log('en set active')
            // postsImport.unshift(action.post)
            return{
                ...state,
                usuarioLogeado:action.user
            }
    }
    return {
        state
    }
    
}
export default UserReducer