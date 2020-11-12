import { put, takeLatest, all, select } from "redux-saga/effects";

import {
  FETCH_NEWS_REQUEST,
  FETCH_ARTICLE_REQUEST,
  DELETE_ARTICLE_REQUEST,
} from "./constants";
import {
  fetchNewsSuccess,
  fetchNewsError,
  fetchArticleSuccess,
  fetchArticleError,
  deleteArticleSuccess,
  deleteArticleError,
} from "./actions";


import { API_URL } from "../utils/utils";
import { selectNews } from "../redux/selectors";

function* fetchNews({ query, hitsPerPage, page }) {
  try {
    const data = yield fetch(
      `${API_URL}/search?query=${query};hitsPerPage=${hitsPerPage};page=${page}`
    ).then((response) => response.json());
    yield put(fetchNewsSuccess(data.hits, data.nbPages));
  } catch (error) {
    yield put(fetchNewsError(error));
  }
}

function* fetchArticle({ id }) {
  try {
    const data = yield fetch(`${API_URL}/items/${id}`).then((response) =>
      response.json()
    );
    yield put(fetchArticleSuccess(data));
  } catch (error) {
    yield put(fetchArticleError(error));
  }
}

function* deleteArticle({ id }) {
  try {
    // here should be the call to delete, but I haven't found it in the API docs
    // will just update the news from store

    const news = yield select(selectNews);
    const updatedNews = news.filter(
      (activeArticle) => activeArticle.objectID !== id
    );
    yield put(deleteArticleSuccess(updatedNews));
  } catch (error) {
    yield put(deleteArticleError(error));
  }
}

export function* actionWatcher() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  yield takeLatest(FETCH_ARTICLE_REQUEST, fetchArticle);
  yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticle);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
