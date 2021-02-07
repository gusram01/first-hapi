import hapi from '@hapi/hapi';
import path from 'path';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import Crumb from '@hapi/crumb';
import pug from 'pug';
import pino from 'hapi-pino';
import router from './routes';
import { fileNotFound } from './helpers/assetNotFound';
import { getQuestions } from './methods/getQuestions';
import apiPlugin from './plugins/api/index';

const Blankie = require('blankie');
const Scooter = require('@hapi/scooter');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const routes: hapi.RouteOptions = {
  files: {
    relativeTo: path.join(__dirname, '..', 'public'),
  },
};

const init = async () => {
  const server = hapi.server({ port, host, routes });

  /** Plugins */
  await server.register(inert);
  await server.register(vision);
  await server.register([
    Scooter,
    {
      plugin: Blankie,
      options: {
        styleSrc:
          "'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
        fontSrc: "'self' data:",
        scriptSrc:
          "'self' 'unsafe-inline' https://code.jquery.com/jquery-3.5.1.slim.min.js https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js",
        generateNonces: false,
      },
    },
  ]);
  await server.register({
    plugin: Crumb,
    options: {
      cookieOptions: {
        isSecure: process.env.NODE_ENV === 'production',
      },
    },
  });
  await server.register({
    plugin: pino,
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production',
    },
  });
  await server.register({
    plugin: apiPlugin,
    options: {
      prefix: 'api',
    },
  });

  /** Server Methods */
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
  server.logger.info(`Server online on port: ${server.info.port}`);
};

export { init };
