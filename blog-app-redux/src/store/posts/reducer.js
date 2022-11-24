
// Step 2: Let's create the post reducer. 
// What's Reducer?

import { CREATE_REQUEST, DELETE_REQUEST, FETCH_BY_ID_REQUEST, FETCH_REQUEST, UPDATE_REQUEST } from "./types";

/* 
  it is a fn-- that takes in two params -- namely state and action.
  it must return state 
*/
const postReducer = (state = [], action) => {
  // Step 4: Let's have switch case with possible action types
  switch(action.type){
    case CREATE_REQUEST:
    case FETCH_REQUEST:
    case FETCH_BY_ID_REQUEST:
    case UPDATE_REQUEST:
    case DELETE_REQUEST:
      // set the loading to true
      return state;

    default:
      return state;
  }
}

export default postReducer;

// For step3: refer store/posts/types.js 

// For Step 5: refer store/index.js 