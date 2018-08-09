import React, { Component } from 'react';
import { Routes } from './Routes';
import { NavBarContainer } from './base/NavBar/NavBarContainer';


class Main extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <Routes />
      </div>
    );
  }
}

export default Main;
