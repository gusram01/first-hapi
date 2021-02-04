import { database } from 'firebase-admin';
import { encrypt } from '../../helpers/encrypter';
import { Users } from '../interfaces/Users';

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

    return refUser.key;
  }
}
