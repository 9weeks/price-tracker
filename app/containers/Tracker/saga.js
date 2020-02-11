/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { PRICE_DATA } from './constants';
import { reposLoaded } from './actions';

import { makeSelectorPID, makeSelectorOpt } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const pid = yield select(makeSelectorPID());
  const opt = yield select(makeSelectorOpt());

  const requestURL = `http://localhost:3000/api/product?pid=${pid}&opt={opt}`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, pid, opt));
  } catch (err) {
    // /yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PRICE_DATA, getRepos);
}
