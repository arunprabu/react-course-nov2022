// Step 1: Let's create the store
import { createStore } from "redux";

export default function configureStore(){
  const store = createStore(
    // special param 'reducer' is needed
  );
  console.log(store);
  return store;
}

// For step 2: refer store/posts/reducer.js 