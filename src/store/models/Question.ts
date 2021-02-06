import { database } from 'firebase-admin';
import { Questions } from '../interfaces/Questions';
import { Answers } from '../interfaces/Answers';

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

  async getQuestions(howMany = 5) {
    const query = await this.collection
      .limitToLast(howMany)
      .orderByChild('created')
      .once('value');
    return query.val();
  }

  async getQuestion(id: string) {
    const query = await this.collection.child(id).once('value');
    return query.val();
  }

  async newAnswer(answer: Answers) {
    const refAnswer = await this.collection
      .child(answer.id)
      .child('answers')
      .push();
    await refAnswer.set(answer);

    return { key: refAnswer.key, ...answer };
  }
}
