import { defineConfig } from 'umi';
import routes from './routes';
// import store from './store';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/', // 不能为空
  routes: routes,
  // layout: {
  //   locale: false,
  // },
  dva: {
    lazyLoad: true,
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
      sandbox: { experimentalStyleIsolation: true },
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          props: {
            zidingyi: 'zidingyi',
            // parentStore: store
          },
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'micvue2', // 唯一 id
          // 传入初始化参数，也可以是store
          props: {
            zidingyi: 'zidingyi',
            // parentStore: store
          },
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
});
