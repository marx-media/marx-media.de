import { MrxFramework } from '@mrx-framework/core';
import App from './App.vue';

const routes = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
  },
];

export default MrxFramework(
  App,
  {
    routes,
  },
  async (ctx: any) => {},
);
