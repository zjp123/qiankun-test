export default [
  {
    path: '/',
    component: '@/pages/layout',
    routes: [
      // {
      //   path: '/',
      //   component: '@/pages/layout',
      //   routes: [
      //     // {
      //     //   path: '/app1/table',
      //     //   component: '@/micro/app1/tabelCom',
      //     // },
      //     {
      //       path: '/app1',
      //       name: 'app1',
      //       microApp: 'app1'
      //     }
      //   ]
      // },
      {
        path: '/app1',
        microApp: 'app1',
        name: 'app1',
        // 路由模式下，你可以这样设置一些静态配置开启 loading 动画：
        microAppProps: {
          autoSetLoading: true,
          className: 'myContainer',
          wrapperClassName: 'myWrapper',
        },
      },
      // {
      //   path: '/',
      //   component: '@/pages/index'
      // }
    ],
  },
  // { path: '/app1', component: '@/micro/app1' },
  // { path: '/app2', component: '@/micro/app2' },
];
