import {
    GET_LAUNCH_INFO,
    GET_LAUNCH_INFO_FAIL,
    GET_LAUNCH_INFO_SUCCESS
} from '../actions/types'
import { FETCH_LAUNCHES_FAIL } from '../actions/types';

export default getLaunchInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_LAUNCH_INFO:
            return {...state, loading: true }
        case GET_LAUNCH_INFO_SUCCESS:
            return { state: action.payload.data, loading: false }
        case FETCH_LAUNCHES_FAIL:
            return {...state, loading: false, error: 'ERROR' }
        default:
            return state
    }
}