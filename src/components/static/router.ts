import { ServerRoute } from '@hapi/hapi';

export const staticRoute: ServerRoute = {
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
    },
  },
};
