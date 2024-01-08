// src/index.js

import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with BrowserRouter */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
