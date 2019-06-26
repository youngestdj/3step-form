import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Index';
import './assets/scss/styles.scss';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
);
