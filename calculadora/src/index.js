import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navheader from './Navheader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Navheader/>
);
reportWebVitals();
