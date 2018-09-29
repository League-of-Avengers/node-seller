# vue_ele

1. 修改 config/index.js 中 dev 的 proxyTable 代理，将请求代理到 http://127.0.0.1:7001
2. 修改 config/index.js 中 dev 的 host 为 0.0.0.0  方便同局域网内的其他设备访问
3. 修改 config/index.js 中 build 的 assetsRoot 等参数，打包时代码放到符合 egg 目录结构中


# 与 https://github.com/ustbhuangyi/vue-sell 不同

1. 使用 less 编译器
2. 没有在 webpack-dev-server 来 mock 数据，使用 egg 来 mock server
3. 使用 axios 来进行 ajax 请求


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
