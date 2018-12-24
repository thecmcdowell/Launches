import * as actions from './types'

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