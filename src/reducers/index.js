import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducers'
import getLaunchesReducer from './getLaunchInfoReducers'

export default combineReducers({
    favorites: favoritesReducer,
    launchList: getLaunchesReducer
})