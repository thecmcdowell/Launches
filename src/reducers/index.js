import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducers'

export default combineReducers({
    favorites: favoritesReducer
})