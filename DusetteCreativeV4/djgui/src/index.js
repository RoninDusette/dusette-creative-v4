import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import Main from './js/Main';
import 'popper.js';
import 'bootstrap';
import './js/utils/Effects';


ReactDOM.render((
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
), document.getElementById('site-content'));

