import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './home/main/main';
import Home from './test/testHome';
import NavBar from './home/navbar/navbar';

ReactDOM.render(
  <Router>
    <div>
      <div>
        <NavBar />
      </div>
      <Route exact path="/" component={Main} />
      <Route path="/items" component={Home} />
    </div>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
