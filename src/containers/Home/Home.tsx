import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default Home;
