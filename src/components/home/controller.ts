import { ServerRoute } from '@hapi/hapi';

const home: ServerRoute['handler'] = async (req, h) => {
  try {
    const questions = await req.server.methods.getQuestions(10);
    if (!questions) {
      return h.view('index', {
        title: 'Home',
        user: req.state.user,
        error: 'There is not questions at this moment',
      });
    }

    return h.view('index', {
      title: 'Home',
      user: req.state.user,
      questions,
    });
  } catch (err) {
    console.error(err);
    return h.response(`error: ${err}`);
  }
};
export const controller = { home };
