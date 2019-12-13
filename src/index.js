import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './home/navbar/navbar';
import Categories from './home/main/categories/categories';
import Items from './home/main/items/items';

ReactDOM.render(
  <Router>
    <div>
      <div>
        <NavBar />
      </div>
      <Route exact path="/" component={Categories} />
      <Route path="/items" component={Items} />
    </div>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
