import { ServerRoute } from '@hapi/hapi';

const home: ServerRoute['handler'] = async (req, h) => {
  try {
    const questions = await req.server.methods.getQuestions(10);
    if (!questions) {
      req.logger.error('There is not questions at this moment');

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
  } catch (e) {
    req.logger.error(e, 'Error message');

    return h.response(`error: ${e}`);
  }
};
export const controller = { home };
