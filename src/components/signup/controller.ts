import { ServerRoute } from '@hapi/hapi';
import { usersDB } from '../../store';

const signup: ServerRoute['handler'] = (req, h) =>
  h.view('signup', {
    title: 'Signup',
  });

const newUser: ServerRoute['handler'] = async (req, h) => {
  try {
    const data = await usersDB.newUser(req.payload as any);
    if (!data) {
      return h.response('error data').code(400);
    }
    return h.view('new-user', {
      title: 'Welcome',
      data,
    });
  } catch (e) {
    console.error(e);
    return h.response('Oopss try again later').code(500);
  }
};

export const controller = {
  signup,
  newUser,
};
