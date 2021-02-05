import { ServerRoute } from '@hapi/hapi';

const logout: ServerRoute['handler'] = (req, h) =>
  h.redirect('/login').unstate('user');

export const controller = {
  logout,
};
