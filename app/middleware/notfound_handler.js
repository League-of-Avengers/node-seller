/**
 * 自定义服务器 404 时的响应
 * 在配置中引入中间件 config/config.default.js
 * Date: 2018/9/6
 * Time: 15:26
 */

// app/middleware/notfound_handler.js
module.exports = () => {
	return async function notFoundHandler(ctx, next) {
		console.log('::::404中间件start')
		await next();
		if (ctx.status === 404 && !ctx.body) {
			// await ctx.render('404')         // 调用 app/view/404.html 作为404的响应
			ctx.body = ctx.apijson(404, '没有此接口', '')
		}
		console.log('::::404中间件end')
	};
};