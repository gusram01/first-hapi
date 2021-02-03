import Hapi from '@hapi/hapi';
import path from 'path';
import inert from '@hapi/inert';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const routes: Hapi.RouteOptions = {
  files: {
    relativeTo: path.join(__dirname, '..', 'public'),
  },
};

const init = async () => {
  const server = Hapi.server({ port, host, routes });

  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/home',
    handler: (req, h) => h.file('index.html'),
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
      },
    },
  });

  await server.start();
  console.log(`Server online on port: ${server.info.port}`);
};

export { init };
