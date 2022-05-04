import styles from './index.less';
// import {useQiankunStateForSlave} from '../app'
import LayoutCom from './layout.js';
import { useEffect } from 'react';
import actions from '../actions';
import { useModel } from 'umi';

export default function IndexPage(props) {
  // const {setMasterState} = useQiankunStateForSlave()// 这种写法不行
  const { setMasterState } = useModel('@@qiankunStateForSlave'); //这种写法待定
  useEffect(() => {
    setTimeout(() => {
      setMasterState({
        str: '主应用更新了数据',
      });
      // 登录成功后，设置 token
      actions.setGlobalState({ userInfo: { userName: '周杰伦', age: 18 } });
    }, 6000);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>主应用Page index</h1>
      <LayoutCom />
      {props.children}
    </div>
  );
}
