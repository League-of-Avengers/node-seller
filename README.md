

# 技术栈

后端： node + egg + mysql + sequelize + redis
后台PC： vue + elementUI + vue-element-admin
前台wap： vue + vue_router + axios + vuex
小程序：采用 mpvue 改造 vue 项目
APP： 采用 weex 改造 vue 项目


# 目录结构

1. 暂定前后分离开发结构，整体结构采用 node egg 框架项目结构
2. 前端代码放到 {root}/vue 目录下，通过修改 webpack 打包配置，将 build 后的文件放到符合 egg 框架的目录中

*详情查看各自的 README.md*


# 参考文档：

egg: https://eggjs.org/zh-cn/tutorials/index.html
vue: https://cn.vuejs.org/
vue-element-admin: https://panjiachen.github.io/vue-element-admin/#/dashboard


# 参考项目：

https://github.com/ustbhuangyi/vue-sell

https://github.com/bailicangdu/vue2-elm

https://github.com/bailicangdu/node-elm



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org