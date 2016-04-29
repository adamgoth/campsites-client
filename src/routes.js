import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import CampsitesPage from './containers/CampsitesPage';
import CampsitePage from './containers/Campsitepage';

export default (
  <Route path='/' component={App}>
    <Route path='/about' component={About} />
    <Route path='/list' component={ListPage} />
    <Route path='/campsites' component={CampsitesPage} />
    <Route path='/campsites/:id' component={CampsitePage} />
  </Route>
);
