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
      req.logger.error('Please write valie email/password');

      return h
        .view('login', {
          title: 'Login',
          error: 'Please write a valid email / password',
        })
        .code(400);
    }

    return h.redirect('/').state('user', data);
  } catch (e) {
    req.logger.error(e, 'Error message');

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
