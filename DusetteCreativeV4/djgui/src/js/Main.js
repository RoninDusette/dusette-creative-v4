import React, { Component } from 'react';
import HomeContainer from './Home/Containers/HomeContainer'
import '../styles/styles.css';

class Main extends Component {
  render() {
    return (
        <React.Fragment>
            <HomeContainer />
        </React.Fragment>
    );
  }
}

export default Main;