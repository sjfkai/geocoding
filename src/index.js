import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Geocoding from './pages/Geocoding';
import Reverse from './pages/Reverse';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/react';

Sentry.init({dsn: "https://248d50e0958b4bd6938466b0da8ce65f@o134944.ingest.sentry.io/5330027"});

// ReactDOM.render(
//   <React.StrictMode>
//     <Reverse />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Reverse />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
