import { ADD_FAVORITE, DELETE_FAVORITE } from '../../src/actions/types'
import favoritesReducer from '../../src/reducers/favoritesReducers'
import data from '../dummyLaunch'

describe('favorites reducer tests', () => {
    it('saves a launch as a favorite', () => {
        const input = {
            type: ADD_FAVORITE,
            launch: data
        }
        expect(favoritesReducer([], input)).toMatchSnapshot()
    })
    it('deletes a favorite launch', () => {
        const input = {
            type: DELETE_FAVORITE,
            id: 1431
        }
        expect(favoritesReducer([], input)).toEqual([])
    })
})