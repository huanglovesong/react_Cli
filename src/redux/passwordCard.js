import { createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { beginTask, endTask } from 'redux-nprogress';
import Api from '../config/api';

// beging not modify
const {
  getErrorPasswordCardList, getErrorPasswordCardListResult,
  handleErrorCard, handleErrorCardResult
} = createActions('GET_ERROR_PASSWORD_CARD_LIST', 'GET_ERROR_PASSWORD_CARD_LIST_RESULT',
    'HANDLE_ERROR_CARD', 'HANDLE_ERROR_CARD_RESULT');

export { getErrorPasswordCardList, handleErrorCard };

export default handleActions({
  GET_ERROR_PASSWORD_CARD_LIST: (state) => ({
    ...state,
    isfetching: true
  }),
  GET_ERROR_PASSWORD_CARD_LIST_RESULT: (state, action) => ({
    ...state,
    isfetching: false,
    getErrorPasswordCardListResult: action.payload
  }),
  HANDLE_ERROR_CARD: (state) => ({
    ...state,
    isfetching: true
  }),
  HANDLE_ERROR_CARD_RESULT: (state, action) => ({
    ...state,
    isfetching: false,
    handleErrorCardResult: action.payload
  })
}, {});
// ending not modify

function* getErrorPasswordCardListSaga(data) {
  try {
    yield put(beginTask());

    const res = yield call(axios.post, Api.GetErrorPasswordCardListUrl, data.payload);

    yield put(getErrorPasswordCardListResult(res));
  } catch (error) {
    yield put(getErrorPasswordCardListResult(error));
  } finally {
    yield put(endTask());
  }
}

export function* watchGetErrorPasswordCardListSaga() {
  yield takeEvery(getErrorPasswordCardList, getErrorPasswordCardListSaga);
}


function* handleErrorCardSaga(data) {
  try {
    yield put(beginTask());

    const res = yield call(axios.post, Api.HandleErrorCardUrl, data.payload);

    yield put(handleErrorCardResult(res));
  } catch (error) {
    yield put(handleErrorCardResult(error));
  } finally {
    yield put(endTask());
  }
}

export function* watchHandleErrorCardSaga() {
  yield takeEvery(handleErrorCard, handleErrorCardSaga);
}
