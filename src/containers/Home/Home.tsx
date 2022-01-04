import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';
import { Posts } from '../Posts/Posts';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  );
};

export default Home;
