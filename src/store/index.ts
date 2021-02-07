import db, { storage } from './db';
import { User } from './models/User';
import { Question } from './models/Question';
import { Images } from './models/Images';

const usersDB = new User(db);
const questionsDB = new Question(db);
const imageStorage = new Images(storage);

export { usersDB, questionsDB, imageStorage };
