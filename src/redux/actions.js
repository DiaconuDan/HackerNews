export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

export const FETCH_ARTICLE_REQUEST = "FETCH_ARTICLE_REQUEST";
export const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS" ;
export const FETCH_ARTICLE_ERROR = "FETCH_ARTICLE_ERROR";

export const DELETE_ARTICLE_BY_ID_REQUEST = "DELETE_ARTICLE_BY_ID_REQUEST" ;
export const DELETE_ARTICLE_BY_ID_SUCCESS = "DELETE_ARTICLE_BY_ID_SUCCESS" ;
export const DELETE_ARTICLE_BY_ID_ERROR = "DELETE_ARTICLE_BY_ID_ERROR" ;

export const CLEANUP_ACTIVE_SHOW_ARTICLE= "CLEANUP_ACTIVE_SHOW_ARTICLEE" ;
export const CLEANUP_ACTIVE_DELETE_ARTICLE_BY_ID= "CLEANUP_ACTIVE_DELETE_ARTICLE_BY_ID" ;


export const fetchNews = (query, hitsPerPage, page) => {
  return {
    type: FETCH_NEWS_REQUEST,
    query: query,
    hitsPerPage: hitsPerPage,
    page: page,
  };
};

export const fetchNewsSuccess = (news, nbPages) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    news: news,
    nbPages: nbPages,
  };
};

export const fetchNewsError = (error) => {
  return {
    type: FETCH_NEWS_ERROR,
    error: error,
  };
};

export const fetchArticleById = (id) => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    id: id,
  };
};

export const fetchArticleByIdSuccess = (activeShowArticle) => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    activeShowArticle: activeShowArticle,
  };
};

export const fetchArticleByIdError = (error) => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    error: error,
  };
};

export const deleteArticleById = (id) => {
  return {
    type: DELETE_ARTICLE_BY_ID_REQUEST,
    id: id,
  };
};

export const deleteArticleByIdSuccess = (news) => {
  return {
    type: DELETE_ARTICLE_BY_ID_SUCCESS,
    news: news,
  };
};

export const deleteArticleByIdError = (id) => {
  return {
    type: DELETE_ARTICLE_BY_ID_ERROR,
    id: id,
  };
};



export const cleanupActiveShowArticle = () => {
  return {
    type: CLEANUP_ACTIVE_SHOW_ARTICLE,
    activeShowArticle: {},
  };
}




