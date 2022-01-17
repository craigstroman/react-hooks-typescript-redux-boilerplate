import axios from 'axios';
import { IUsers } from './usersTypes';

export async function getUsers(): Promise<{ data: Array<IUsers> }> {
  const { data } = await axios.get('http://localhost:3000/users');

  return { data };
}
