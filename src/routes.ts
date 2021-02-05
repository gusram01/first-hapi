import { ServerRoute } from '@hapi/hapi';
import { homeRoute } from './components/home/router';
import { staticRoute } from './components/static/router';
import { newUserRoute, signupRoute } from './components/signup/router';
import { loggedRoute, loginRoute } from './components/login/router';
import { logoutRoute } from './components/logout/router';
import { error404Route } from './components/404/router';

const routes: ServerRoute[] = [
  homeRoute,
  staticRoute,
  signupRoute,
  newUserRoute,
  loginRoute,
  loggedRoute,
  logoutRoute,
  error404Route,
];

export default routes;
