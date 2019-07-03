import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://simplicity.mysmartjobboard.com/templates/SimplicityDND/assets/images/logo.svg" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Available Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Post Job</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Log in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;