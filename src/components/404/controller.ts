import { ServerRoute } from '@hapi/hapi';

const error404: ServerRoute['handler'] = (req, h) =>
  h
    .view('404', {
      title: 'Resource Not found',
    })
    .code(404);

export const controller = { error404 };
