import { Users } from './Users';

export interface Questions {
  owner: Users;
  title: string;
  description: string;
  [key: string]: string | Users;
}
