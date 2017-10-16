import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import NavBar from './components/NavBar.jsx';
import {BrowserRouter}  from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>

), document.getElementById('app'));
