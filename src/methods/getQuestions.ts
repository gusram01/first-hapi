import { questionsDB } from '../store';

export const getQuestions = async (howMany: number) =>
  questionsDB.getQuestions(howMany);
