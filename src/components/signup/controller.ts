import { ServerRoute } from '@hapi/hapi';
import { usersDB } from '../../store';
import { Users } from '../../store/interfaces/Users';

const signup: ServerRoute['handler'] = (req, h) => {
  if (req.state.user) {
    return h.redirect('/');
  }
  return h.view('signup', {
    title: 'Signup',
    user: req.state.user,
  });
};
const newUser: ServerRoute['handler'] = async (req, h) => {
  try {
    const data = await usersDB.newUser(req.payload as Users);
    if (!data.key) {
      return h
        .view('signup', {
          title: 'Signup',
          error: 'Something get wrong, please try again',
        })
        .code(400);
    }
    return h.redirect('/').state('user', data);
  } catch (e) {
    req.logger.error(e, 'Error message');
    return h
      .view('signup', {
        title: 'Signup',
        error: 'Something get wrong, please try again',
      })
      .code(500);
  }
};

export const controller = {
  signup,
  newUser,
};
