import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducers'
import getLaunchesReducer from './getLaunchListReducers'

export default combineReducers({
    favorites: favoritesReducer,
    launchList: getLaunchesReducer,
})