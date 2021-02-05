import { ServerRoute } from '@hapi/hapi';
import { usersDB } from '../../store';

const login: ServerRoute['handler'] = (req, h) => {
  if (req.state.user) {
    return h.redirect('/');
  }
  return h.view('login', {
    title: 'Login',
    user: req.state.user,
  });
};
const logged: ServerRoute['handler'] = async (req, h) => {
  try {
    const data = await usersDB.canLogin(req.payload as any);
    if (!data) {
      return h
        .view('login', {
          title: 'Login',
          error: 'Please write a valid email / password',
        })
        .code(400);
    }

    return h.redirect('/').state('user', data);
  } catch (e) {
    console.error(e);
    return h
      .view('login', {
        title: 'Login',
        error: 'Something get wrong, please try again',
      })
      .code(500);
  }
};

export const controller = {
  login,
  logged,
};
