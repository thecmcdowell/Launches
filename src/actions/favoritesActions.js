import * as actions from './types'

export const addFavorite = id => {
    return {
        type: actions.ADD_FAVORITE,
        id
    }
}