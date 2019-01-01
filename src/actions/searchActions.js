import * as actions from './types'

export const searchLaunches = (date) => {
    return {
        type: actions.SEARCH,
        payload: {
            request: {
                url: `launch?startdate=${date}`
            }
        }
    }
}