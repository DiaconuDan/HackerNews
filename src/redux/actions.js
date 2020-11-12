import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
  CLEAR_ACTIVE_ARTICLE,
} from './constants' ;


// NEWS


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


// ARTICLE DISPLAY



export const fetchArticle = (id) => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    id: id,
  };
};

export const fetchArticleSuccess = (activeArticle) => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    activeArticle: activeArticle,
  };
};

export const fetchArticleError = (error) => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    error: error,
  };
};


// ARTICLE CLEANUP


export const clearActiveArticle = () => {
  return {
    type: CLEAR_ACTIVE_ARTICLE,
    activeArticle: {},
    loadingShowArticleID: '',
  };
};



// ARTICLE DELETE



export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE_REQUEST,
    id: id,
  };
};

export const deleteArticleSuccess = (news) => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
    news: news,
  };
};

export const deleteArticleError = (id) => {
  return {
    type: DELETE_ARTICLE_ERROR,
    id: id,
  };
};

