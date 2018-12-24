import * as actions from './types'

export const addFavorite = id => {
    return {
        type: actions.ADD_FAVORITE,
        id
    }
}

export const deleteFavorite = id => {
    return {
        type: actions.DELETE_FAVORITE,
        id
    }
}