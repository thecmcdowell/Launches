import {
    FETCH_LAUNCHES,
    FETCH_LAUNCHES_SUCCESS,
    FETCH_LAUNCHES_FAIL
} from '../actions/types'

export default getLaunchesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_LAUNCHES:
            console.log('fetch', state)
            return {...state, loading: true }
        case FETCH_LAUNCHES_FAIL:
            console.log('fetch nay', action.payload)
            return {...state, loading: false, error: 'ERROR' }
        case FETCH_LAUNCHES_SUCCESS:
            console.log('fetch yay', state)
            return { state: action.payload.data, loading: false }
        default:
            return state
    }
}