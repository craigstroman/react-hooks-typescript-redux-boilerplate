import React, { useEffect, useCallback } from 'react';
import { AppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { postsState, getPostsAsync, resetStatus } from './postsSlice';
import { PostItems } from '../../components/PostItems/PostItems';

export const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newPostsState = useAppSelector(postsState);

  const handleGetPosts = useCallback(() => {
    dispatch(getPostsAsync());
    dispatch(resetStatus());
  }, [dispatch]);

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  return (
    <PostItems
      loading={newPostsState.status === 'success' ? false : true}
      error={newPostsState.status !== 'success' ? newPostsState.status : ''}
      posts={newPostsState.value}
    />
  );
};
