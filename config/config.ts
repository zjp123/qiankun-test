import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/', // 不能为空
  routes: routes,
  layout: {
    locale: false,
  },
  locale: {},
  // name: 'qiankuntestmain',
  // publicPath: '//',
  hash: false,
  // mountElementId: 'root',
  history: {
    type: 'browser',
  },
  // manifest: {
  //   basePath: '/',
  // },
  qiankun: {
    // slave: {},
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
        // {
        //   name: 'app2', // 唯一 id
        //   entry: '//localhost:7002', // html entry
        // },
      ],
    },
  },
});
