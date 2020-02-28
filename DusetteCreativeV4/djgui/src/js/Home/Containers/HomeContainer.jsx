import React from 'react';
import HomeContent from '../Components/HomeContent';


class HomeContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <HomeContent />
      </React.Fragment>
    );
  }
}

export default HomeContainer