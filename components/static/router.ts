import { ServerRoute } from '@hapi/hapi';

export const staticRoute: ServerRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
    },
  },
};
