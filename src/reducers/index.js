import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducers'
import getLaunchesReducer from './getLaunchListReducers'
import getLaunchInfoReducer from './getLaunchInfoReducers'

export default combineReducers({
    favorites: favoritesReducer,
    launchList: getLaunchesReducer,
    launchInfo: getLaunchInfoReducer
})