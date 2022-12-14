// This file is for the feature saga. 
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import { CREATE_ERROR, CREATE_REQUEST, CREATE_SUCCESS, FETCH_BY_ID_ERROR, FETCH_BY_ID_REQUEST, FETCH_BY_ID_SUCCESS, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './types';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'

// worker saga -- can connect with rest api and dispatch 
function* handleFetchRequest(){
  const res = yield call(callApi, POSTS_API_URL, 'get')
  if(res.error){
    // dispatch with error -- FETCH_ERROR
    // use put() from redux-saga
    yield put({
      type: FETCH_ERROR,
      payload: res.error
    })
  }else {
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
  yield takeEvery(FETCH_REQUEST, handleFetchRequest)
}

function* handleCreateRequest(data) {
  console.log('Inside handleCreateRequest');
  console.log(data);

  const res = yield call(callApi, POSTS_API_URL, 'post', data.payload)
  if (res.error) {
    yield put({
      type: CREATE_ERROR,
      payload: res.error
    })
  } else {
    yield put({
      type: CREATE_SUCCESS,
      payload: res
    })
  }
} 

function* watchCreatePost() {
  yield takeEvery(CREATE_REQUEST, handleCreateRequest)
}


// worker saga -- can connect with rest api and dispatch 
function* handleFetchByIdRequest(data) {
  const res = yield call(callApi, POSTS_API_URL + '/' + data.postId, 'get')
  if (res.error) {
    yield put({
      type: FETCH_BY_ID_ERROR,
      payload: res.error
    })
  } else {

    yield put({
      type: FETCH_BY_ID_SUCCESS,
      payload: res
    })
  }
}

// watcher saga  -- will watch specific action type and run the saga
function* watchFetchByIdRequest() {
  yield takeEvery(FETCH_BY_ID_REQUEST, handleFetchByIdRequest)
}

// feature saga 
function* postsSaga(){
  yield all([
    fork(watchFetchRequest),
    fork(watchCreatePost),
    fork(watchFetchByIdRequest)
  ])
}

export default postsSaga;