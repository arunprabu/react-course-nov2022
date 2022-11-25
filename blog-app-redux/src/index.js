import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'; // npm i history
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './configureStore';

const history = createBrowserHistory();

//Step 7: get the store data with history as well. initial state can be passed later 
const store = configureStore(history);
console.log(store);

// Step 8: Let's provide the store data to the whole app.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* providing store data */}
      <App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
