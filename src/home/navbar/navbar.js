import React from 'react';
import logo from '../../assets/img/star-wars.png';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  handleClick = e => {};

  render() {
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
                <Link to="/">
                  <a className={'nav-link'} onClick={this.handleClick}>
                    Categories <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link to="/items">
                  <a className={'nav-link'} onClick={this.handleClick}>
                    All Items
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
