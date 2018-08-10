import React from 'react';
import { pageLoading } from '../../Utils/Effects';
import { HomeLoaderContainer } from '../../Misc/Containers/HomeLoaderContainer';
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
        <HomeLoaderContainer />
        <HomeContent />
      </div>
    );
  }
}

export default HomeContainer;
