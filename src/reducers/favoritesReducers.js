import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/types'
import data from './dummyFavoriteData'

const initState = []
export default favoritesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.launch]
        case DELETE_FAVORITE:
            return state.filter(launch => launch.id !== action.id);
        default:
            return state
    }
}