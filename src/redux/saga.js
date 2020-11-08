import { put, takeLatest, all, select } from "redux-saga/effects";
import {
  FETCH_NEWS_REQUEST,
  FETCH_ARTICLE_REQUEST,
  fetchArticleByIdSuccess,
  fetchArticleByIdError,
  DELETE_ARTICLE_BY_ID_REQUEST,
} from "./actions";
import {
  fetchNewsSuccess,
  fetchNewsError,
  deleteArticleByIdError,
  deleteArticleByIdSuccess,
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
    yield put(fetchArticleByIdSuccess(data));
  } catch (error) {
    yield put(fetchArticleByIdError(error));
  }
}

function* deleteArticle({ id }) {
  try {
    // here should be the call to delete, but I haven't found it in the API docs
    // will just update the news from store

    const news = yield select(selectNews);
    const updatedNews = news.filter((article) => article.objectID !== id);
    yield put(deleteArticleByIdSuccess(updatedNews));
  } catch (error) {
    yield put(deleteArticleByIdError(error));
  }
}

export function* actionWatcher() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  yield takeLatest(FETCH_ARTICLE_REQUEST, fetchArticle);
  yield takeLatest(DELETE_ARTICLE_BY_ID_REQUEST, deleteArticle);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
