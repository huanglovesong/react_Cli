import { createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { beginTask, endTask } from 'redux-nprogress';
import Api from '../config/api';

// beging not modify
const {
  getStockLogList, getStockLogListResult
} = createActions('GET_STOCK_LOG_LIST', 'GET_STOCK_LOG_LIST_RESULT');

export { getStockLogList };

export default handleActions({
  GET_STOCK_LOG_LIST: (state) => ({
    ...state,
    isfetching: true
  }),
  GET_STOCK_LOG_LIST_RESULT: (state, action) => ({
    ...state,
    isfetching: false,
    getStockLogListResult: action.payload
  })
}, {});
// ending not modify

function* getStockLogListSaga(data) {
  try {
    yield put(beginTask());

    const res = yield call(axios.post, Api.GetStockLogListUrl, data.payload);

    yield put(getStockLogListResult(res));
  } catch (error) {
    yield put(getStockLogListResult(error));
  } finally {
    yield put(endTask());
  }
}

export function* watchGetStockLogListSaga() {
  yield takeEvery(getStockLogList, getStockLogListSaga);
}
