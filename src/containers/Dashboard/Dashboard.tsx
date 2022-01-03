import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
);
