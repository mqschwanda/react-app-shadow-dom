import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import getRootDiv from './getRootDiv';
import loadStyles from './loadStyles';

loadStyles();

const rootDiv = getRootDiv();
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
