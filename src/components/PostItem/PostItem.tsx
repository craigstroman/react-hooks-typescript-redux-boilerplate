import React from 'react';
import { useLocation } from 'react-router-dom';
import './postItem.scss';

interface IPost {
  state: {
    title: string;
    body: string;
  };
}

export const PostItem: React.FC = () => {
  const post: IPost = useLocation();
  const { state } = post;
  const { body } = state;
  const { title } = state;

  return (
    <div className="post">
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
      <main>{body}</main>
    </div>
  );
};
