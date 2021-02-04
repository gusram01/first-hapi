import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';

export const signupRoute: ServerRoute = {
  method: 'GET',
  path: '/signup',
  handler: controller,
};
