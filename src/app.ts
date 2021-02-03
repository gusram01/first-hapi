import Hapi from '@hapi/hapi';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const init = async () => {
  const server = Hapi.server({ port, host });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => 'Hello World!',
  });

  await server.start();
  console.log(`Server online on port: ${server.info.port}`);
};

export { init };
