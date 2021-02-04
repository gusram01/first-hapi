import db from './db';
import { User } from './models/User';

const usersDB = new User(db);

export { usersDB };
