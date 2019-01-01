import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducers'
import getLaunchesReducer from './getLaunchListReducers'
import searchReducer from './searchReducers'

export default combineReducers({
    favorites: favoritesReducer,
    launchList: getLaunchesReducer,
    searchResults: searchReducer
})