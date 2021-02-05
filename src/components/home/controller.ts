import { ServerRoute } from '@hapi/hapi';

const home: ServerRoute['handler'] = (req, h) =>
  h.view('index', {
    title: 'Home',
    user: req.state.user,
  });

export const controller = { home };
