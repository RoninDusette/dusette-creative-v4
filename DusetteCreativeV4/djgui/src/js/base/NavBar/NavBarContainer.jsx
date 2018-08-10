import React from 'react';
import { Link } from 'react-router-dom';


export const NavBarContainer = () => (
  <div>
    <div className={"fixed-top navbar-underlay"} />
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
      <div className={"navbar-brand"}>
        <Link className={"mx-auto"} to={{pathname: '/'}}>
            <img className="nav-brand-image d-inline-block mr-1" src="/static/DCv4/img/icons/logo-plain.png" alt=""/>
        </Link>
        <Link className={"nav-link navbar-text"} to={{pathname: '/'}}>
          Dusette Creative
        </Link>
      </div>
      <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: '/art' }}>ART</Link>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: '/dev' }}>DEV</Link>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: '/txt' }}>TXT</Link>
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
            <Link className="nav-link" to={{ pathname: '/buy' }}>BUY</Link>
          </li>
          <li className="nav-item">
            <em><i className="fas fa-ellipsis-v text-light-white pt-3 mx-1 text-white-50"/></em>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{pathname: '/hey'}}>HEY</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)