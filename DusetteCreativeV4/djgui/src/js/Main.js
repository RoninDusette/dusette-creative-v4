import React, { Component } from 'react';
import '../styles/styles.css';
import './Utils/UXFixes';
import { Routes } from './Utils/Routes';
import NavBarContainer from './Base/NavBar/Containers/NavBarContainer';
import FooterContainer from './Base/Footer/Containers/FooterContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <Routes />
        <NavBarContainer/>
        <FooterContainer />
      </div>
    );
  }
}

export default Main;