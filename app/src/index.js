import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getRootDiv from './getRootDiv';

const rootDiv = getRootDiv();
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
