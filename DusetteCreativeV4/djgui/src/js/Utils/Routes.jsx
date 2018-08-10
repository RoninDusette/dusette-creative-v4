import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../Home/Containers/HomeContainer';
import AboutContainer from '../About/Containers/AboutContainer'


export const Routes = () => (
  <div>
    <Switch>
      <Route exact path={'/'} component={HomeContainer}/>
      <Route exact path={'/about'} component={AboutContainer}/>
    </Switch>
  </div>
)