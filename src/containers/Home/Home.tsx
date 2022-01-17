import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';
import { Posts } from '../Posts/Posts';
import { Users } from '../Users/Users';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
};

export default Home;
