import axios from 'axios';
import { IPosts } from './postsTypes';

export async function getPosts(): Promise<{ data: Array<IPosts> }> {
  const { data } = await axios.get('http://localhost:3000/posts');

  return { data };
}
