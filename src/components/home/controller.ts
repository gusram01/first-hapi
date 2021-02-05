import { server, ServerRoute } from '@hapi/hapi';

export const controller: ServerRoute['handler'] = (req, h) =>
  h.view('index', {
    title: 'Home',
    user: req.state.user,
  });
