import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initialize, serverURL } from 'parse'

const PARSE_APPLICATION_ID = 'QrYfJbqjKMhEg3CfnpkaUbZeqCCm7RR7J9dbZt7w';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'ffcAyJd260lvHgJxSdfwZCfofwWBdT4aT0ZphaVU';
initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
serverURL = PARSE_HOST_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

