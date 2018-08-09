import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home/HomeContainer';


export const Routes = () => (
  <div>
    <Switch>
      <Route exact path={'/'} component={HomeContainer}/>
    </Switch>
  </div>
)