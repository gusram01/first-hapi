import { ServerRoute } from '@hapi/hapi';
import { homeRoute } from './components/home/router';
import { staticRoute } from './components/static/router';
import { signupRoute } from './components/signup/router';

const routes: ServerRoute[] = [homeRoute, staticRoute, signupRoute];

export default routes;
