// Step 5: Let's combine reducers to create root reducer

import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import postReducer from "./posts/reducer";
import postsSaga from "./posts/sagas";

export const createRootReducer = (history) => {
  const rootReducer = combineReducers({
    posts: postReducer,
  })

  return rootReducer;
}

// for step 6: refer configureStore.js 

// Now, let's create rootSaga here itself -- it can be in rootSaga.js file also
export function* rootSaga(){
  yield all([
    fork(postsSaga)
    // another feature's saga can come here
  ])
}
