import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/types'

const initState = []
const favoritesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.id]
        default:
            return state
    }
}

export default favoritesReducer