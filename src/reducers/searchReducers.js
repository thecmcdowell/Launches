import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from '../actions/types'

export default searchReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH:
            return {...state, loading: true }
        case SEARCH_SUCCESS:
            return { state: action.payload.data, loading: false }
        case SEARCH_FAIL:
            return {...state, loading: false, error: 'ERROR' }
        default:
            return state
    }
}