import { ServerRoute } from '@hapi/hapi';
import { homeRoute } from '../components/home/router';
import { staticRoute } from '../components/static/router';

const routes: ServerRoute[] = [homeRoute, staticRoute];

export default routes;
