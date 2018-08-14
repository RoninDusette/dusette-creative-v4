import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
const jQuery = require('jquery')(window);
const $ = jQuery;
const popper = require('popper.js');
const bootstrap = require('bootstrap');
import Main from './js/Main';


ReactDOM.render((
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
), document.getElementById('site-content'));

