import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';

const logoutRoute: ServerRoute = {
  method: 'GET',
  path: '/logout',
  handler: controller.logout,

  options: {
    auth: false,
  },
};

export { logoutRoute };
