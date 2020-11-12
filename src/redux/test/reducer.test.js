import {
  setActiveFulfilmentShift,
  removeActiveFulfilmentShift,
  fetchArticle,
  clearActiveArticle,
} from "../actions";
import { reducer, initialState } from "../reducer";

describe("reducer to be combined", () => {
  const defaultAction = {
    type: "some_type",
  };
  it("should return the default state if no state is provided", () => {
    const actual = reducer(undefined, defaultAction);
    expect(initialState).toEqual(actual);
  });

  it("should return the correct state for setting the active article. Clearing it should work as well", () => {
    let action = fetchArticle(1);
    let expected = {
      ...initialState,
      loadingShowArticleID: 1,
    };
    let actual = reducer(initialState, action);
    expect(actual).toEqual(expected);

    const stateWithActiveArticle = {
      ...initialState,
      activeArticle: { title: "Harry Potter" },
      loadingShowArticleID: 1,
    };
    action = clearActiveArticle();
    expected = {
      ...stateWithActiveArticle,
      activeArticle: {},
      loadingShowArticleID: "",
    };

    actual = reducer(stateWithActiveArticle, action);
    expect(actual).toEqual(expected);
  });
});
