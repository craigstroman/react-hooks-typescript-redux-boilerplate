import React from 'react';
import { useLocation } from 'react-router-dom';
import { IUsers } from '../../containers/Users/usersTypes';
import './userItem.scss';

interface IUser {
  state: {
    user: IUsers;
  };
}

export const UserItem: React.FC = () => {
  const userState: IUser = useLocation();
  const { state } = userState;
  const { user } = state;
  const { email } = user;
  const { name } = user;
  const { username } = user;
  const { website } = user;
  const { phone } = user;

  return (
    <div className="user">
      <div className="user__info">
        <div className="user__info--label">Name:</div>
        <div className="user__info--item">{name}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Phone:</div>
        <div className="user__info--item">{phone}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Email:</div>
        <div className="user__info--item">
          <a href={`mailto: ${email}`}>{email}</a>
        </div>
      </div>
      <div className="user__info">
        <div className="user__info--label">User:</div>
        <div className="user__info--item">{username}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Website:</div>
        <div className="user__info--item">
          <a href={`http://${website}`} target="_blank" rel="noreferrer">
            {website}
          </a>
        </div>
      </div>
    </div>
  );
};
