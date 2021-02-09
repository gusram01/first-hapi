import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';

export const homeRoute: ServerRoute = {
  method: 'GET',
  path: '/',
  handler: controller.home,
  options: {
    cache: {
      expiresIn: 30 * 1000,
      privacy: 'private',
    },
    auth: false,
  },
};
