import {
  selectActiveArticle,
  selectNews,
  selectNbPages,
  selectError,
  selectLoadingShowArticleID,
  selectLoadingDeleteArticleID,
} from "../selectors";

describe("Selectors should work as expected", () => {
  const mockState = {
    newsLoading: false,
    loadingShowArticleID: "",
    loadingDeleteArticleID: "",
    news: [],
    error: null,
    nbPages: 50,
    activeArticle: {},
  };

  test("selectNews", () => {
    const { news } = mockState;
    expect(selectNews(mockState)).toEqual(news);
  });

  test("selectNbPages", () => {
    const { nbPages } = mockState;
    expect(selectNbPages(mockState)).toEqual(nbPages);
  });


   test("selectActiveArticle", () => {
    const { activeArticle } = mockState;
    expect(selectActiveArticle(mockState)).toEqual(activeArticle);
  });


  test("selectError", () => {
    const { error } = mockState;
    expect(selectError(mockState)).toEqual(error);
  });

  test("selectLoadingShowArticleID", () => {
    const { loadingShowArticleID } = mockState;
    expect(selectLoadingShowArticleID(mockState)).toEqual(loadingShowArticleID);
  });

  test("selectLoadingDeleteArticleID", () => {
    const { loadingDeleteArticleID } = mockState;
    expect(selectLoadingDeleteArticleID(mockState)).toEqual(loadingDeleteArticleID);
  });

});
