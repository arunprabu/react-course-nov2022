// Step 1: Let's create the store
import { createStore } from "redux";
import { createRootReducer } from "./store";

// Step 6 continues... 
// setting up initial state and history into the store
export default function configureStore(history, initialState){
  const store = createStore(
    // special param 'reducer' is needed
    // Step 6: We need combinedReducer a.k.a rootReducer
    createRootReducer(history),
    initialState
  );
  console.log(store);
  return store;
}

// For step 2: refer store/posts/reducer.js 
// For step 7: refer src/index.js   (NOT src/store/index.js)