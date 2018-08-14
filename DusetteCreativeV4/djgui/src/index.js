import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'popper.js';
import 'bootstrap';
import './styles/styles.css';
import './js/Utils/UXFixes';
import Main from './js/Main';


ReactDOM.render((
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
), document.getElementById('site-content'));

