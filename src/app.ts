import hapi from '@hapi/hapi';
import path from 'path';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import pug from 'pug';
import router from './routes';
import { fileNotFound } from './helpers/assetNotFound';
import { getQuestions } from './methods/getQuestions';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const routes: hapi.RouteOptions = {
  files: {
    relativeTo: path.join(__dirname, '..', 'public'),
  },
};

const init = async () => {
  const server = hapi.server({ port, host, routes });

  await server.register(inert);
  await server.register(vision);

  server.method('getQuestions', getQuestions, {
    cache: {
      expiresIn: 60 * 1000,
      generateTimeout: 2000,
    },
  });

  /** Define cookie "user" */
  server.state('user', {
    ttl: 1000 * 60 * 20,
    isSecure: process.env.NODE_ENV === 'production',
    encoding: 'base64json',
  });

  /** Define pug as view engine */
  server.views({
    engines: { pug },
    relativeTo: path.join(__dirname, '..'),
    path: 'views',
  });

  /** Define error hook within lifecycle */
  server.ext('onPreResponse', fileNotFound);

  server.route(router);

  await server.start();
  console.log(`Server online on port: ${server.info.port}`);
};

export { init };
