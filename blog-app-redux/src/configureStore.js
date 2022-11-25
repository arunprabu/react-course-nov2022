// Step 1: Let's create the store
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension';
import { createRootReducer, rootSaga } from "./store";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
});

// Step 6 continues... 
// setting up initial state and history into the store
export default function configureStore(history, initialState){
  const store = createStore(
    // special param 'reducer' is needed
    // Step 6: We need combinedReducer a.k.a rootReducer
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  );
  console.log(store);
  // NEVER EVER FORGET TO RUN THE ROOTSAGA 
  sagaMiddleware.run(rootSaga);
  return store;
}

// For step 2: refer store/posts/reducer.js 
// For step 7: refer src/index.js   (NOT src/store/index.js)

