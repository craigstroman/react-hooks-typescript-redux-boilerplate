import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUsers } from './usersTypes';
import { getUsers } from './users.API';

export interface UsersState {
  value: IUsers[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: UsersState = {
  value: [],
  status: 'idle',
};

export const getUsersAsync = createAsyncThunk('get/users', async () => {
  const response = await getUsers();

  return response.data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetStatus: (state) => {
      const newState = state;

      newState.status = 'idle';
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        const newState = state;

        newState.status = 'loading';
        return newState;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        const { payload } = action;
        const newState = state;

        newState.value = [...payload];
        newState.status = 'success';
        return newState;
      })
      .addCase(getUsersAsync.rejected, (state) => {
        const newState = state;

        newState.status = 'failed';
        return newState;
      });
  },
});

export const { resetStatus } = usersSlice.actions;
export const usersState = (state: RootState) => state.users;

export default usersSlice.reducer;
