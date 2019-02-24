import React from 'react';
import { view, store } from 'react-easy-state';
import HomeContent from '../Components/HomeContent';


const stores = store(
    {
      click: 'clicked'
    }
)

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

export default view(HomeContainer)