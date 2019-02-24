import React, { Component } from 'react';
import '../styles/styles.css';
import './Utils/UXFixes';
import { Routes } from './Utils/Routes';
import NavBarContainer from './Base/NavBar/Containers/NavBarContainer';
import FooterContainer from './Base/Footer/Containers/FooterContainer'

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
        <NavBarContainer/>
        <FooterContainer />
      </React.Fragment>
    );
  }
}