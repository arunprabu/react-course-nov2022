// Step 5: Let's combine reducers to create root reducer

import { combineReducers } from "redux";
import postReducer from "./posts/reducer";

export const createRootReducer = (history) => {
  const rootReducer = combineReducers({
    posts: postReducer,
  })

  console.log(rootReducer);
  return rootReducer;
}

// for step 6: refer configureStore.js 
