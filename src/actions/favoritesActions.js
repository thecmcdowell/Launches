import { ADD_FAVORITE, DELETE_FAVORITE } from './types'

export const addFavorite = launch => {
    console.log('Action')
    return {
        type: ADD_FAVORITE,
        launch,
    }
}

export const deleteFavorite = id => {
    return {
        type: DELETE_FAVORITE,
        id
    }
}