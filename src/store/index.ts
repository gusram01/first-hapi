import db from './db';
import { User } from './models/User';
import { Question } from './models/Question';

const usersDB = new User(db);
const questionsDB = new Question(db);

export { usersDB, questionsDB };
