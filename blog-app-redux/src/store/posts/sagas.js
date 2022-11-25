// This file is for the feature saga. 
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './types';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'

// worker saga -- can connect with rest api and dispatch 
function* handleFetchRequest(){
  console.log('============4. Inside handleFetchRequest -- Feature Saga');
  // 
  const res = yield call(callApi, POSTS_API_URL, 'get')
  if(res.error){
    console.log('============5. Inside handleFetchRequest/error -- Feature Saga');

    // dispatch with error -- FETCH_ERROR
    // use put() from redux-saga
    yield put({
      type: FETCH_ERROR,
      payload: res.error
    })
  }else {
    console.log('============5. Inside handleFetchRequest/success -- Feature Saga');
    // dispatch with success -- FETCH_SUCCESS
    // use put() from redux-saga
    yield put({
      type: FETCH_SUCCESS,
      payload: res
    })
  }
} 

// watcher saga  -- will watch specific action type and run the saga
function* watchFetchRequest(){
  console.log('============3. Inside watchFetchRequest -- Feature Saga');
  yield takeEvery(FETCH_REQUEST, handleFetchRequest)
}

// feature saga 
function* postsSaga(){
  console.log('============2. Inside postsSaga -- Feature Saga');

  yield all([
    fork(watchFetchRequest)
    fork(watchCreateRequest)
  ])
}

export default postsSaga;