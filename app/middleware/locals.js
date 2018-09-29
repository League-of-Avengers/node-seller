'use strict';

// 把 config 注入到 locals 中，在模板引擎中可用
module.exports = (options, app) => {
	return async function(ctx, next) {
        console.log('::::locals中间件start')
		ctx.locals.config = app.config;
		await next();

        console.log('::::locals中间件end')
	};
};