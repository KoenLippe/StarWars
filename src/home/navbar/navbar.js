import React from 'react';
import logo from '../../assets/star-wars.png';

function NavBar() {
  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light custom">
        <a class="navbar-brand" routerLink="/">
          <img height="50" src={logo} />
        </a>
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor"
          aria-controls="navbarColor"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link">
                Categorieën <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/scoreboard">
                Items
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
