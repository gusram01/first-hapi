import { Users } from './Users';

export interface Answers {
  user: Users;
  answer: string;
  id: string;
  created: number;
  [key: string]: string | Users | number;
}
