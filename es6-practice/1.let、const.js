/*
 * @Date: 2022-11-05 15:51:37
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-05 17:29:04
 * @Description: 这是****文件
 */

// console.log(b) // undefined
// {
//   let a = 1
//   var b = 2
// }

// console.log(a) // a is not defined
// console.log(b) 2

// for(var i = 0; i < 5; i++) {
//   console.log(i, 'i')
//    var a = function  () {
//     console.log(i, 'a functon') // 此时的i指向的是全局
//   }
// }
// a()
// console.log(i)


const foo = Object.freeze({ a: { b : 1}})
foo.a.b = 133
console.log(foo, 'foo')
var a = 1
console.log(globalThis.global, 'globalThis')