import { ADD_FAVORITE, DELETE_FAVORITE } from "../../src/actions/types";
import * as actions from "../../src/actions/favoritesActions";
import data from "../dummyLaunch";

describe("favoritesActions tests", () => {
  it("adds a launch as favorite", () => {
    const outcome = {
        type: ADD_FAVORITE,
        launch: data
    }
    expect(actions.addFavorite(data)).toEqual(outcome);
  }),
    it("deletes a favorited launch", () => {
      const outcome = {
        type: DELETE_FAVORITE,
        id: 1431
      };
      expect(actions.deleteFavorite(1431)).toEqual(outcome);
    });
});
