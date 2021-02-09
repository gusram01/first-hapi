import { ServerRoute } from '@hapi/hapi';

const staticRoute: ServerRoute = {
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
    },
  },
  options: {
    auth: false,
  },
};

export { staticRoute };
