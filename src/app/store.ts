import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PostsReducer from '../containers/Posts/postsSlice';
import UsersReducer from '../containers/Users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
    users: UsersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
