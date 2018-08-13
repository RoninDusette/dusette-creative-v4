import React from 'react';
import { HomeContent } from '../Components/HomeContent';


class HomeContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    pageLoading();
  }

  render () {
    return (
      <div>
        <HomeContent />
      </div>
    );
  }
}

export default HomeContainer;
