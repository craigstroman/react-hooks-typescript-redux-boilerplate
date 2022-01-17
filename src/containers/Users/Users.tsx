import React, { useEffect, useCallback } from 'react';
import { AppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { usersState, getUsersAsync } from './usersSlice';

export const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newUsersState = useAppSelector(usersState);

  const handleGetUsers = useCallback(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  console.log('newUsersState: ', newUsersState);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  return <div>Users</div>;
};
