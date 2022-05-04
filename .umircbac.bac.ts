import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/app1', component: '@/micro/app1' },
    { path: '/app2', component: '@/micro/app2' },
  ],
  fastRefresh: {},
});
