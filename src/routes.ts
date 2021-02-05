import { ServerRoute } from '@hapi/hapi';
import { homeRoute } from './components/home/router';
import { staticRoute } from './components/static/router';
import { newUserRoute, signupRoute } from './components/signup/router';
import { loggedRoute, loginRoute } from './components/login/router';
import { logoutRoute } from './components/logout/router';

const routes: ServerRoute[] = [
  homeRoute,
  staticRoute,
  signupRoute,
  newUserRoute,
  loginRoute,
  loggedRoute,
  logoutRoute,
];

export default routes;
