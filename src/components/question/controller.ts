import { ServerRoute } from '@hapi/hapi';
import { fileNotFound } from '../../helpers/assetNotFound';
import { questionsDB } from '../../store';

const newAnswer: ServerRoute['handler'] = async (req, h) => {
  if (!req.state.user) {
    return h.redirect('/login');
  }

  const { id, answer } = req.payload as any;
  const auxAnswer = {
    user: req.state.user,
    created: new Date().getTime(),
    correct: false,
    answer,
    id,
  };

  try {
    const data = await questionsDB.newAnswer(auxAnswer);
    if (!data) {
      req.logger.error('Error on posting new Question, please try again');
    }

    return h.redirect(`/question/${id}`);
  } catch (e) {
    req.logger.error(e, 'Error message');
  }
};

const correctAnswer: ServerRoute['handler'] = async (req, h) => {
  const { questionId, answerId } = req.params as any;
  if (!req.state.user) {
    return h.redirect('/login');
  }
  try {
    await questionsDB.setCorrectAnswer(questionId, answerId);
    return h.redirect(`/question/${questionId}`);
  } catch (e) {
    req.logger.error(e, 'Error message');
  }
};

const question: ServerRoute['handler'] = async (req, h) => {
  const { id } = req.params as any;
  try {
    const data = await questionsDB.getQuestion(id);
    if (!data) {
      return fileNotFound(req, h);
    }

    return h.view('question', {
      title: 'Question details',
      user: req.state.user,
      question: data,
      key: id,
    });
  } catch (e) {
    req.logger.error(e, 'Error message');
  }
};

export const controller = {
  question,
  newAnswer,
  correctAnswer,
};
