import { database } from 'firebase-admin';
import { encrypt, correctPass } from '../../helpers/encrypter';
import { Users } from '../interfaces/Users';
import { Login } from '../interfaces/Login';

export class User {
  private db: database.Database;
  private ref: database.Reference;
  private collection: database.Reference;

  constructor(db: database.Database) {
    this.db = db;
    this.ref = this.db.ref('/');
    this.collection = this.ref.child('user');
  }

  async newUser(user: Users) {
    const refUser = this.collection.push();
    const { password, ...data } = user;

    await refUser.set({ ...data, password: await encrypt(password) });

    return { key: refUser.key, ...data };
  }

  async canLogin(user: Login) {
    const userQuery = await this.collection
      .orderByChild('email')
      .equalTo(user.email)
      .once('value');

    const userFound = userQuery.val();
    if (!userFound) {
      return false;
    }

    const [, info] = Object.entries<Users>(userFound)[0];
    const { password, ...data } = info;
    return (await correctPass(user.password, info.password)) && data;
  }
}
