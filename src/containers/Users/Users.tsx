import React, { useEffect, useCallback } from 'react';
import { AppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { usersState, getUsersAsync } from './usersSlice';
import { UserItems } from '../../components/UserItems/UserItems';

export const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newUsersState = useAppSelector(usersState);

  const handleGetUsers = useCallback(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  return (
    <UserItems
      loading={newUsersState.status === 'success' ? false : true}
      error={newUsersState.status !== 'success' ? newUsersState.status : ''}
      users={newUsersState.value}
    />
  );
};
