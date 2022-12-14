import {userImports} from '../../Constantes/USER'

const InitialState = {
    users: userImports,
    usuarioLogeado: userImports.filter(e=> e.usuario === 'Swicho')
    /* Quizas tenga que poner Usuario Logeado */
}

const UserReducer = (state=InitialState ,action:any)=>{
    return state
}
export default UserReducer