import Joi from 'joi';
import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';
import { failJoiValidation } from '../../helpers/failValidation';

const questionRoute: ServerRoute = {
  method: 'GET',
  path: '/question/{id}',
  handler: controller.question,
};
const answerRoute: ServerRoute = {
  method: 'POST',
  path: '/answer',
  handler: controller.newAnswer,
  options: {
    validate: {
      payload: Joi.object({
        answer: Joi.string().required(),
        id: Joi.string().required(),
      }),
      failAction: failJoiValidation,
    },
  },
};

export { questionRoute, answerRoute };
