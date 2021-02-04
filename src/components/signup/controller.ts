import { ServerRoute } from '@hapi/hapi';

const signup: ServerRoute['handler'] = (req, h) =>
  h.view('signup', {
    title: 'Signup',
  });

const newUser: ServerRoute['handler'] = (req, h) =>
  h.view('new-user', {
    title: 'Welcome',
  });

export const controller = {
  signup,
  newUser,
};
