import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';
import { Posts } from '../Posts/Posts';
import { Users } from '../Users/Users';
import { PostItem } from '../../components/PostItem/PostItem';
import { UserItem } from '../../components/UserItem/UserItem';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/post/:id" component={PostItem} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/user/:id" component={UserItem} />
    </Switch>
  );
};

export default Home;
