import React from 'react';
import { Link } from 'react-router-dom';
import { IPosts } from '../../containers/Posts/postsTypes';
import './postItems.scss';

interface PostItemsProps {
  loading: boolean;
  error: string;
  posts: IPosts[];
}

export const PostItems: React.FC<PostItemsProps> = ({
  loading,
  error,
  posts,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error: {error}.</div>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
