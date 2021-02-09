import Joi from 'joi';
import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';
import { emailPattern } from '../../helpers/emailPattern';
import { failJoiValidation } from '../../helpers/failValidation';

const loginRoute: ServerRoute = {
  method: 'GET',
  path: '/login',
  handler: controller.login,

  options: {
    auth: false,
    state: {
      parse: true,
    },
  },
};
const loggedRoute: ServerRoute = {
  method: 'POST',
  path: '/login',
  handler: controller.logged,
  options: {
    validate: {
      payload: Joi.object({
        email: Joi.string().required().pattern(emailPattern),
        password: Joi.string().required().min(6),
      }),
      failAction: failJoiValidation,
    },
    auth: false,
    state: {
      parse: true,
    },
  },
};

export { loginRoute, loggedRoute };
