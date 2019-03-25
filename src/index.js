import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.addEventListener('storage', function (e) {
  if (e.storageArea === sessionStorage) {
    console.log('Session storage change');
  } else {
    console.log('some other stoe storage change');
  }
});