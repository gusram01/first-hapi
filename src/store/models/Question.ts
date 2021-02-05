import { database } from 'firebase-admin';
import { Questions } from '../interfaces/Questions';

export class Question {
  private db: database.Database;
  private ref: database.Reference;
  private collection: database.Reference;

  constructor(db: database.Database) {
    this.db = db;
    this.ref = this.db.ref('/');
    this.collection = this.ref.child('faq');
  }

  async newQuestion(question: Questions) {
    const refQuestion = this.collection.push();
    await refQuestion.set(question);

    return { key: refQuestion.key, ...question };
  }
}
