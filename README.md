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
