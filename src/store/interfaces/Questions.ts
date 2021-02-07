import { Users } from './Users';
import { Answers } from './Answers';

export interface Questions {
  owner: Users;
  answers?: Answers[];
  title: string;
  description: string;
  created: number;
  image?: any;
  imageUrl?: string;
  [key: string]: string | Users | number | Answers[] | undefined;
}
