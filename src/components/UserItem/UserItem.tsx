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
  const { address, company, email, name, username, website, phone } = user;
  const { city, street, suite, zipcode } = address;

  console.log('user: ', user);

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
      <div className="user__info">
        <div className="user__info--label">Street:</div>
        <div className="user__info--item">{street}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Suite:</div>
        <div className="user__info--item">{suite}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">City:</div>
        <div className="user__info--item">{city}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Zipcode:</div>
        <div className="user__info--item">{zipcode}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Company:</div>
        <div className="user__info--item">{company.name}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">Catch Phrase:</div>
        <div className="user__info--item">{company.catchPhrase}</div>
      </div>
      <div className="user__info">
        <div className="user__info--label">BS:</div>
        <div className="user__info--item">{company.bs}</div>
      </div>
    </div>
  );
};
