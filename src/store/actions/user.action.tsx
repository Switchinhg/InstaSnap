export const SET_ACTIVE = 'SET_ACTIVE'
// export const BORRAR_POST = 'BORRAR_POST'

export const ActiveUser = (data:any) =>({
    type:SET_ACTIVE,
    post:data
})
// export const BorrarPost = (postID:any) =>({
//     type:BORRAR_POST,
//     postID
// })