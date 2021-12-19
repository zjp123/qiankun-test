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
  const [masterState, setMasterState] = useState<any>({ zjp: 'child' });

  // function getData () {
  //   return new Promise((resolve, reject) => {
  //     resolve({ zjp: 'NB' })
  //   })
  // }
  // const res = await getData()
  // console.log(res, '异步数据')
  useEffect(() => {
    console.log('子应用更新数据了', masterState);
  }, [masterState]);

  // setTimeout(() => {
  //   setMasterState({ctt: 'child'})
  // }, 2000);

  // setMasterState(res)
  return {
    masterState,
    setMasterState,
  };
  // console.log('这是啥')
}
