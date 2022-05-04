import { initGlobalState, MicroAppStateActions } from 'qiankun';

const initialState = {
  userInfo: {}, // 当前登录用户信息
  globalConfig: {},
  sources: [], // 所有资源
  btnCodeList: [], // 按钮权限
};
const actions: MicroAppStateActions = initGlobalState(initialState);

export default actions;
