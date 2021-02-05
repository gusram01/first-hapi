import Joi from 'joi';
import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';
import { failJoiValidation } from '../../helpers/failValidation';

const askRoute: ServerRoute = {
  method: 'GET',
  path: '/ask',
  handler: controller.ask,
};
const newQuestion: ServerRoute = {
  method: 'POST',
  path: '/ask',
  handler: controller.newAsk,
  options: {
    validate: {
      payload: Joi.object({
        title: Joi.string().required().min(3),
        description: Joi.string().required().min(10),
      }),
      failAction: failJoiValidation,
    },
  },
};

export { askRoute, newQuestion };
