'use strict';

// had enabled by egg
// exports.static = true;


// egg-view-nunjucks 模板引擎启用
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};

// ORM: sequelize 插件启用
exports.sequelize = {
    enable: false,
    package: 'egg-sequelize'
}