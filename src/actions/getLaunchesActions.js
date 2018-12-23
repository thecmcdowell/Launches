import * as actions from './types'

export const getLaunchInfo = id => {
    return {
        type: actions.GET_LAUNCH_INFO,
        payload: {
            request: {
                url: `launch/${id}`
            }
        }
    }
}

export const getLaunchList = () => {
    return {
        type: actions.FETCH_LAUNCHES,
        payload: {
            request: {
                url: 'launch/next/10'
            }
        }
    }
}