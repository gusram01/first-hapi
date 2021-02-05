import { ServerRoute } from '@hapi/hapi';
import { questionsDB } from '../../store';

const ask: ServerRoute['handler'] = (req, h) => {
  if (!req.state.user) {
    return h.redirect('/login');
  }
  return h.view('ask', {
    title: 'FAQ - new Question',
    user: req.state.user,
  });
};
const newAsk: ServerRoute['handler'] = async (req, h) => {
  const { title, description } = req.payload as any;
  const question = {
    owner: req.state.user,
    title,
    description,
    created: new Date().getTime(),
  };

  try {
    const data = await questionsDB.newQuestion(question);
    if (!data.key) {
      return h
        .view('ask', {
          title: 'FAQ - new Question',
          error: 'Please write valid title / description',
        })
        .code(400);
    }

    return h.redirect('/');
  } catch (e) {
    console.error(e);
    return h
      .view('ask', {
        title: 'FAQ - new Question',
        error: 'Something get wrong, please try again',
      })
      .code(500);
  }
};

export const controller = {
  ask,
  newAsk,
};
