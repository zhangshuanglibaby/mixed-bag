/*
 * @Date: 2022-11-06 11:35:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-06 11:47:16
 * @Description: 这是****文件
 */
let obj = {};
let arr = [];
let data = { payload: '我是payload'}

({ payload: obj.list } = {...data});

console.log(obj)
// let obj = {}
// // let data = { payload: '我是payload' }

// ({ payload: obj.list } = { payload: '我是payload' })
// console.log(obj)