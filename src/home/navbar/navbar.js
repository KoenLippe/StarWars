import React from 'react';
import logo from '../../assets/img/star-wars.png';

function NavBar() {
  return (
    <div className={'header'}>
      <nav className={'navbar navbar-expand-lg navbar-light bg-light custom'}>
        <a className={'navbar-brand'}>
          <img height="50" src={logo} />
        </a>
        <button
          className={'navbar-toggler custom-toggler'}
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor"
          aria-controls="navbarColor"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={'navbar-toggler-icon'}></span>
        </button>
        <div className={'collapse navbar-collapse'} id="navbarColor">
          <ul className={'navbar-nav mr-auto'}>
            <li className={'nav-item'}>
              <a className={'nav-link'}>
                Categorieën <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={'nav-item'}>
              <a className={'nav-link'}>Items</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
