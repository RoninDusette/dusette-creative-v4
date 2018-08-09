import React from 'react';
import { pageLoading } from '../../utils/Effects';
import { HomeLoader } from '../../components/Home/HomeLoader'
import { HomeContent } from '../../components/Home/HomeContent';

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
        <HomeLoader />
        <HomeContent />
      </div>
    );
  }
}

export default HomeContainer;
