export const ADD_POST = 'ADD_POST'
export const BORRAR_POST = 'BORRAR_POST'

export const addPost = (data:any) =>({
    type:ADD_POST,
    post:data
})
export const BorrarPost = (postID:any) =>({
    type:BORRAR_POST,
    postID
})