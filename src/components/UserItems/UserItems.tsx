import React from 'react';
import { Link } from 'react-router-dom';
import { IUsers } from '../../containers/Users/usersTypes';
import './userItems.scss';

interface UserItemsProps {
  loading: boolean;
  error: string;
  users: IUsers[];
}

export const UserItems: React.FC<UserItemsProps> = ({
  loading,
  error,
  users,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error: {error}.</div>;
  }

  return (
    <ul className="users">
      {users.map((user) => (
        <li key={`${user.id}-${Math.random() * 10}`}>
          <Link
            to={{
              pathname: `/user/${user.id}`,
              state: {
                user,
              },
            }}
            className="users__link"
          >
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
