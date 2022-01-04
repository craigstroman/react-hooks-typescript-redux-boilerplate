import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IPosts } from './postsTypes';
import { getPosts } from './posts.API';

export interface PostsState {
  value: IPosts[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: PostsState = {
  value: [],
  status: 'idle',
};

export const getPostsAsync = createAsyncThunk('get/posts', async () => {
  console.log('getPostsAsync:');
  const response = await getPosts();

  return response.data;
});

export const postsSlice = createSlice({
  name: 'posts',
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
      .addCase(getPostsAsync.pending, (state) => {
        const newState = state;

        newState.status = 'loading';
        return newState;
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        const newState = state;

        newState.value = [...payload];
        newState.status = 'success';
        return newState;
      })
      .addCase(getPostsAsync.rejected, (state) => {
        const newState = state;

        newState.status = 'failed';
        return newState;
      });
  },
});

export const { resetStatus } = postsSlice.actions;
export const postsState = (state: RootState) => state.posts;

export default postsSlice.reducer;
