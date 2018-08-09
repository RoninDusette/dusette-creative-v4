import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Main from './js/Main';


ReactDOM.render((
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
), document.getElementById('site-content'));

