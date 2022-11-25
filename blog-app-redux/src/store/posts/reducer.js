
// Step 2: Let's create the post reducer. 
// What's Reducer?

import { CREATE_ERROR, CREATE_REQUEST, DELETE_ERROR, DELETE_REQUEST, FETCH_BY_ID_ERROR, FETCH_BY_ID_REQUEST, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS, UPDATE_ERROR, UPDATE_REQUEST } from "./types";

/* 
  it is a fn-- that takes in two params -- namely state and action.
  it must return state 
*/

const initialPostState = {
  postList: [
  ],
  post: {
  },
  isLoading: false,
  isError: false,
  status: {
  }
}

const postReducer = (state = initialPostState, action) => {
  // Step 4: Let's have switch case with possible action types
  switch(action.type){
    case CREATE_REQUEST:
    case FETCH_REQUEST:
    case FETCH_BY_ID_REQUEST:
    case UPDATE_REQUEST:
    case DELETE_REQUEST:
      // set the loading to true
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    
    case FETCH_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        isError: false,
        postList: action.payload
      }
    
    case CREATE_ERROR:
    case FETCH_ERROR:
    case FETCH_BY_ID_ERROR:
    case UPDATE_ERROR:
    case DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        status: action.payload
      }

    default:
      return state;
  }
}

export default postReducer;

// For step3: refer store/posts/types.js 

// For Step 5: refer store/index.js 