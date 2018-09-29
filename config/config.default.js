'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538036856844_6264';


  // 中间件
  config.middleware = ['locals', 'notfoundHandler', 'errorHandler'];

  // ORM: sequelize 本地开发时配置 , 单个数据库链接
  config.sequelize = {
    delegate: 'model',  // load all models to app.model and ctx.model
    baseDir: 'model',   // load models from `app/model/*.js`
    dialect: 'mysql',   // support: mysql, mariadb, postgres, mssql
    host: '127.0.0.1',
    port: 3306,
    database: 'demo',
    username: 'root',
    password: 'root',
  };

  // egg-view 模板引擎配置
  config.view = {
    mapping: {
      defaultViewEngine: 'nunjucks',
      '.html': 'nunjucks',
      defaultExtension: '.html'
    },
  };

  return config;
};
