

// app/extend/context.js
module.exports = {

  // 统一的接口返回格式
  apijson(code = 200, msg = '', data = '') {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    return {
      code,
      msg,
      data
    }
  },
}