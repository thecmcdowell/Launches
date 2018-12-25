import { ADD_FAVORITE, DELETE_FAVORITE } from '../../src/actions/types'
import * as actions from '../../src/actions/favoritesActions'
import data from '../dummyLaunch'

describe('favoritesActions tests', () => {
    it('adds a launch as favorite', () => {
            expect(actions.addFavorite(data)).toMatchSnapshot()
        }),
        it('deletes a favorited launch', () => {
            const outcome = {
                type: 'DELETE_FAVORITE',
                id: 1431
            }
            expect(actions.deleteFavorite(1431)).toEqual(outcome)
        })
})