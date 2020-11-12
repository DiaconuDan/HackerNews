import { fetchNews, fetchArticle, clearActiveArticle } from "../actions";

import {
  CLEAR_ACTIVE_ARTICLE,
  FETCH_ARTICLE_REQUEST,
  FETCH_NEWS_REQUEST,
} from "../constants";

describe("actions tests", () => {
  const query = "Stephen";
  const hitsPerPage = 20;
  const page = 0;
  const articleId = 1;

  it("should fetch the news", () => {
    const expected = {
      type: FETCH_NEWS_REQUEST,
      query,
      hitsPerPage,
      page,
    };
    const actual = fetchNews(query, hitsPerPage, page);
    expect(actual).toEqual(expected);
  });

  it("should fetch the article", () => {
    const expected = {
      type: FETCH_ARTICLE_REQUEST,
      id: articleId,
    };
    const actual = fetchArticle(articleId);
    expect(actual).toEqual(expected);
  });

  it("should clean the article", () => {
    const expected = {
      type: CLEAR_ACTIVE_ARTICLE,
      loadingShowArticleID: "",
      activeArticle: {},
    };
    const actual = clearActiveArticle();
    expect(actual).toEqual(expected);
  });
});
