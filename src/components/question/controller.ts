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
    answer,
    id,
  };
  console.log(auxAnswer);
  try {
    const data = await questionsDB.newAnswer(auxAnswer);
    if (!data) {
      // return h
      //   .view('question', {
      //     title: 'FAQ - new Question',
      //     error: 'Please write valid title / description',
      //   })
      //   .code(400);
    }

    return h.redirect(`/question/${id}`);
  } catch (e) {
    console.error(e);
  }
};
const question: ServerRoute['handler'] = async (req, h) => {
  const { id } = req.params as any;
  if (!req.state.user) {
    return h.redirect('/login');
  }
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
    console.error(e);
    // return h
    //   .view('question', {
    //     title: 'FAQ - new Question',
    //     error: 'Something get wrong, please try again',
    //   })
    //   .code(500);
  }
};

export const controller = {
  question,
  newAnswer,
};