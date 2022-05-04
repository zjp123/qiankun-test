# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

```
install 以后直接start即可

直接npm start 即可
子应用需要安装 @umijs/plugin-qiankun

主应用不仅需要安装@umijs/plugin-qiankun  还需要安装qiankun 依赖 npm i -S qiankun

主子应用通信： useQiankunStateForSlave 这种方法只适用于 主应用初始化时给子应用 传递数据，后面就不能 主动的改变数据了---不太好这种方式

useQiankunStateForSlave 这个方法只能是同步，不能是异步


```

```
主子项目之间的通信：这是qiankun 原版的方式
1、通过主项目的props: {parentStore: store},把主项目的store通过属性的方式，传给子项目，这个是把主项目的store也传给子项目了，一般不用这样，因为有很多用不到的数据
2、onGlobalStateChange  setGlobalState  offGlobalStateChange
这种方式是，只给子应用传能用到的的数据：
主应用：
import { initGlobalState, MicroAppStateActions } from 'qiankun';
// 初始化 state
const state = Vue.observable({
  userInfo: {}, // 当前登录用户信息
  globalConfig: {},
  sources: [], // 所有资源
  btnCodeList: [] // 按钮权限

})
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

子应用：
// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });

  props.setGlobalState(state);
}
```

```
主子项目之间的通信：umi 的方式, 这种方式注意文档不全导致有些方法看不见，这种方式本身没有问题
// 约定使用 src/app.ts/useQiankunStateForSlave 中的数据作为主应用透传给微应用的 props，优先级高于 propsFromConfig
https://juejin.cn/post/6844904202246815751
const { setGlobalState } = useModel('@@qiankunStateForSlave'); 这个在官方文档中没有找到
const masterState = useModel('@@qiankunStateFromMaster');
// 主应用 
// src/app.ts
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({});

  return {
    masterState,
    setMasterState,
  };
}

子应用：这种子应用也是umi的项目，可以使用下面这种方式，如果子项目不是umi项目，那么可以在mount的props中获取。
微应用中会自动生成一个全局 model，可以在任意组件中获取主应用透传的 props 的值。

import { useModel } from 'umi';

function MyPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
}
或者可以通过高阶组件 connectMaster 来获取主应用透传的 props

import { connectMaster } from 'umi';

function MyPage(props) {
  return <div>{JSON.stringify(props)}</div>;
}

export default connectMaster(MyPage);

```

```
props的方式，这个其实就是qiankun原版的方式
主项目：umi
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

子应用：
mount 中的props 

```
```js
父子应用通信总结：
1、如果主应用是umi项目
   (1) 如果子应用是umi项目，那么可以通过umi 提供的方式useQiankunStateForSlave，来通信
   (2) 如果子应用是非umi项目，就需要用qiankun原生提供的 initGlobalState
2、如果主应用不是umi项目，那么统一用initGlobalState 这种方式

主项目：qiankun_pro(git 对应项目qiankun-test),子项目1 umiapp, 子项目2 vue2-cli-micro
```
