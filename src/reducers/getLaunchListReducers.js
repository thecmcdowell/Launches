import {
    FETCH_LAUNCHES,
    FETCH_LAUNCHES_SUCCESS,
    FETCH_LAUNCHES_FAIL
} from '../actions/types'

export default getLaunchesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_LAUNCHES:
            return {...state, loading: true }
        case FETCH_LAUNCHES_FAIL:
            return {...state, loading: false, error: 'ERROR' }
        case FETCH_LAUNCHES_SUCCESS:
            return { state: action.payload.data, loading: false }
        default:
            return state
    }
}