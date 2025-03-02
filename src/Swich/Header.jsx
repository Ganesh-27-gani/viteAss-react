import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeApp';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          EMBERCLOTHING
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item collapse navbar-collapse">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Product</a>
            <a className="nav-link" href="#">Action</a>
              <button onClick={toggleTheme} className="btn btn-outline-secondary btn-link nav-link border ">
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
