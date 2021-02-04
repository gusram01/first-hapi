import { ServerRoute } from '@hapi/hapi';
import { homeRoute } from './components/home/router';
import { staticRoute } from './components/static/router';
import { newUserRoute, signupRoute } from './components/signup/router';

const routes: ServerRoute[] = [
  homeRoute,
  staticRoute,
  signupRoute,
  newUserRoute,
];

export default routes;
