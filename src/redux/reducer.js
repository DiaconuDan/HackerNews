import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_REQUEST,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_ERROR,
  CLEAR_ACTIVE_ARTICLE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
} from "./constants";

export const initialState = {
  newsLoading: false,
  loadingShowArticleID: "",
  loadingDeleteArticleID: "",
  news: [],
  error: null,
  nbPages: 50,
  activeArticle: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  NEWS

    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        newsLoading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.news,
        nbPages: action.nbPages,
        newsLoading: false,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        error: action.error,
        newsLoading: false,
      };

    // ARTICLE

    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        loadingShowArticleID: action.id,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        activeArticle: action.activeArticle,
      };
    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        loadingShowArticleID: "",
      };

    // CLEAR ARTICLE

    case CLEAR_ACTIVE_ARTICLE:
      return {
        ...state,
        loadingShowArticleID: "",
        activeArticle: {},
      };

    // DELETE ARTICLE

    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loadingDeleteArticleID: action.id,
      }
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        news: action.news,
        loadingDeleteArticleID: "",
        loadingShowArticleID: "",
      };
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

