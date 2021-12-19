import { useState, useEffect } from 'react';
// import asyncdata from './asyncdata.js'

// console.log(asyncdata, 'asyncdataasyncdata')
// export function useQiankunStateForSlave() {
//   const [masterState, setMasterState] = useState<any>({});
//   useEffect(() => {
//     console.log('子应用更新数据了', masterState)
//   }, [masterState])
//   async function getData () {
//     return await new Promise((resolve, reject) => {
//       return resolve({ zjp: 'NB' })
//     })
//   }
//   // const res = await getData()
//   // console.log(res, '异步数据')
//   // setMasterState(res)

//   // res.then((res) => {

//   // }).catch(err => {
//   //   console.log('主应用传递数据出现错误', err)
//   // })
//   return {
//     masterState,
//     setMasterState,
//   }
//   // const [masterState, setMasterState] = useState({ zjp: 'NB' });
//   // const [masterState, setMasterState] = useState();
//   // useEffect(() => {
//   //   console.log('子应用更新数据了', masterState)
//   // }, [masterState])
//   // return {
//   //   masterState,
//   //   setMasterState,
//   // };
// }

// export const qiankun = fetch('/config').then(({ apps }) => {
//   return {
//     apps,
//     routes: [
//       {
//         path: '/app1',
//         microApp: 'app1',
//       },
//     ],
//   };
// });
// 不能是异步  只能是同步
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState<any>({ str: 'aaa' });
  const [ablState, setAblState] = useState({ hh: 'kkk' });
  useEffect(() => {
    console.log('子应用更新数据了', masterState);
  }, [masterState]);
  // 实际给子应用调用修改state的方法
  // 传参和实现可以自定义，子应用直接调用setGlobalState是不生效的，所以才需要这个额外的方法，这是一个坑
  // const newSetGlobalState = (str: any) => { setGlobalState({ str}) }
  // const newSetAblState = (hh: any) => { setAblState({hh}) }
  // return { globalState, setGlobalState, newSetGlobalState ,ablState,setAblState,newSetAblState};
  return { masterState, setMasterState, ablState, setAblState };
}
