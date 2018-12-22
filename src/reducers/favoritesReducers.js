import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/types'

const initState = []
const favoritesReducer = (state = initState, actions) => {
    switch (actions.type) {
        case ADD_FAVORITE:
            return [...state, action.id]
        default:
            return state
    }
}

export default favoritesReducer