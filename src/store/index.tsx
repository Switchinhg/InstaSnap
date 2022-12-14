import {createStore , combineReducers} from 'redux'

/* Reducers */
import PostsReducer from './reducers/posts.reducer'
import UserReducer from './reducers/user.reducer'

const RootReducer = combineReducers({
    users:UserReducer,
    posts:PostsReducer,
})
export default createStore(RootReducer)