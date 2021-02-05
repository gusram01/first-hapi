import { ServerRoute } from '@hapi/hapi';
import { controller } from './controller';

export const error404Route: ServerRoute = {
  method: ['GET', 'POST'],
  path: '/{any*}',
  handler: controller.error404,
};
