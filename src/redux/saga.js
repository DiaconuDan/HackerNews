import { put, takeLatest, all } from "redux-saga/effects";
import { FETCH_NEWS_REQUEST } from './action' ;
import { fetchNewsSuccess, fetchNewsError } from "./action";


function* fetchNews({query,hitsPerPage, page}) {
  try {
    const data = yield fetch(
      `http://hn.algolia.com/api/v1/search?query=${query};hitsPerPage=${hitsPerPage};page=${page}`
    ).then((response) => response.json());
    yield put(fetchNewsSuccess(data.hits, data.nbPages));
  } catch (error) {
    yield put(fetchNewsError(error));
  }
}


function* actionWatcher() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
