import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_REQUEST,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_ERROR,
  CLEANUP_ACTIVE_SHOW_ARTICLE,
  DELETE_ARTICLE_BY_ID_SUCCESS,
  DELETE_ARTICLE_BY_ID_ERROR,
} from "./actions";

const initialState = {
  newsLoading: false,
  articleLoading: false,
  news: [],
  error: null,
  nbPages: 50,
  showArticle: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        newsLoading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        newsLoading: false,
        news: action.news,
        nbPages: action.nbPages,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        newsLoading: false,
        error: action.error,
      };
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        articleLoading: true,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articleLoading: false,
        showArticle: action.showArticle,
      };
    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        articleLoading: false,
        error: action.error,
      };
    case DELETE_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        news: action.news,
      };
    case DELETE_ARTICLE_BY_ID_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case CLEANUP_ACTIVE_SHOW_ARTICLE:
      return {
        ...state,
        articleLoading: false,
        showArticle: action.showArticle,
      };
    default:
      return state;
  }
};

export default reducer;
