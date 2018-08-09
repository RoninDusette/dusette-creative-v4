import React from 'react';
import { Link } from 'react-router-dom';


export const NavBarContainer = () => (
  <div>
    <div className={"fixed-top navbar-underlay"} />
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand mx-auto" href="/">
        <span className="nav-link"><img className="nav-brand-image d-inline-block mr-1"
                                        src=" /static/frontend/img/icons/logo-plain.png" alt="" />
        Dusette Creative</span>
      </a>
      <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">ART</a>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">DEV</a>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">TXT</a>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: '/about' }}>BIO</Link>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BUY</a>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">HEY</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)