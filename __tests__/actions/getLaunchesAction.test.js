import { FETCH_LAUNCHES } from '../../src/actions/types'
import * as actions from '../../src/actions/getLaunchesActions'

describe('getLauncheActions test', () => {
  it('Dispactchs to get the next ten launches', () => {
    const outcome = {
      type: FETCH_LAUNCHES,
      payload: {
        request: {
          url: 'launch/next/10'
        }
      }
    }
    expect(actions.getLaunchList()).toEqual(outcome)
  })
})
