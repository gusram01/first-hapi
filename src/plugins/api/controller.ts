import { ServerRoute } from '@hapi/hapi';
import Boom from '@hapi/boom';
import { questionsDB } from '../../store';

const oneQuestion: ServerRoute['handler'] = async (req, h) => {
  const { id } = req.params as any;
  // req.logger.info(id);
  try {
    const data = await questionsDB.getQuestion(id);
    if (!data) {
      const message = `Not data found with id: ${id}`;
      req.logger.error(message);
      return Boom.notFound(message);
    }

    return data;
  } catch (e) {
    req.logger.error(e, 'Error message');
    return Boom.badImplementation(
      'Oopss!! Something went wrong please try again later',
    );
  }
};

const listQuestions: ServerRoute['handler'] = async (req, h) => {
  const { howMany } = req.params as any;
  req.logger.info(howMany, 'laputa madre qie te pario');

  try {
    const data = await questionsDB.getQuestions(howMany);
    if (!data) {
      const message = 'There is no data for the moment';
      req.logger.error(message);
      return Boom.notFound(message);
    }

    return data;
  } catch (e) {
    req.logger.error(e, 'Error message');
    return Boom.badImplementation(
      'Oopss!! Something went wrong please try again later',
    );
  }
};

export const controller = {
  oneQuestion,
  listQuestions,
};
