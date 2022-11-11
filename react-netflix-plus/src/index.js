// importing official core react library
import React from 'react'; 
// importing the react-dom pkg -- rendering comp
import ReactDOM from 'react-dom/client';

import './index.css'; // importing css
import App from './App'; // importing app comp

import reportWebVitals from './reportWebVitals'; // for analytics purpose

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
