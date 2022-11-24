// Step 3: Let's have all possible action types specific to posts feature

// Define whatever naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const CREATE_REQUEST = '@@posts/CREATE_REQUEST';
export const CREATE_SUCCESS = '@@posts/CREATE_SUCCESS';
export const CREATE_ERROR = '@@posts/CREATE_ERROR';

export const FETCH_REQUEST = '@@posts/FETCH_REQUEST';
export const FETCH_SUCCESS = '@@posts/FETCH_SUCCESS';
export const FETCH_ERROR = '@@posts/FETCH_ERROR';

export const FETCH_BY_ID_REQUEST = '@@posts/FETCH_BY_ID_REQUEST';
export const FETCH_BY_ID_SUCCESS = '@@posts/FETCH_BY_ID_SUCCESS';
export const FETCH_BY_ID_ERROR = '@@posts/FETCH_BY_ID_ERROR';

export const UPDATE_REQUEST = '@@posts/UPDATE_REQUEST';
export const UPDATE_SUCCESS = '@@posts/UPDATE_SUCCESS';
export const UPDATE_ERROR = '@@posts/UPDATE_ERROR';

export const DELETE_REQUEST = '@@posts/DELETE_REQUEST';
export const DELETE_SUCCESS = '@@posts/DELETE_SUCCESS';
export const DELETE_ERROR = '@@posts/DELETE_ERROR';