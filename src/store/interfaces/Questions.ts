import { Users } from './Users';

export interface Questions {
  owner: Users;
  title: string;
  description: string;
  created: number;
  [key: string]: string | Users | number;
}
