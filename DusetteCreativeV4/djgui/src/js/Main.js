import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from './Routes';
import { NavBarContainer } from './base/NavBarContainer';


class Main extends Component {
  render() {
    return (
      <div>
        <Link to={'/about'}>About</Link>
        <NavBarContainer />
        <Routes />
      </div>
    );
  }
}

export default Main;
