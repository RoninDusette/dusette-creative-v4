import React, { Component } from 'react';
import { Routes } from './Utils/Routes';
import { NavBarContainer } from './base/NavBar/NavBarContainer';
import FooterContainer from './Base/Footer/Containers/FooterContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <Routes />
        <FooterContainer />
      </div>
    );
  }
}

export default Main;