import Joi from 'joi';
import { Plugin } from '@hapi/hapi';
import Basic from '@hapi/basic';
import { controller } from './controller';
import { failValidation } from './failValidation';
import { validate } from '../../helpers/validateAuth';

const apiPlugin: Plugin<any> = {
  async register(server, options) {
    const base = options.prefix || 'api';

    await server.register(Basic);

    /** Server Basic Authentication */
    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');

    server.route({
      method: 'GET',
      path: `/${base}/question/{id}`,
      handler: controller.oneQuestion,
      options: {
        validate: {
          params: Joi.object({
            id: Joi.string().required(),
          }),
          failAction: failValidation,
        },
      },
    });
    server.route({
      method: 'GET',
      path: `/${base}/questions/{howMany}`,
      handler: controller.listQuestions,
      options: {
        validate: {
          params: Joi.object({
            howMany: Joi.number().integer().min(1).max(20).required(),
          }),
          failAction: failValidation,
        },
      },
    });
  },
  name: 'hapi-api',
  version: '1.0.0',
};

export default apiPlugin;
