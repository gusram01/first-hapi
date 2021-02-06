import { Users } from './Users';

export interface Answers {
  user: Users;
  answer: string;
  id: string;
  created: number;
  correct: boolean;
  [key: string]: boolean | string | Users | number;
}
