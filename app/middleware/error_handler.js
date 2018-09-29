/**
 * 服务器错误处理
 * prod 返回 'Internal Server Error'， 隐藏错误信息
 */


'use strict';

module.exports = (option, app) => {
    // 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来
    return async function(ctx, next) {
        console.log('::::error中间件start')
        try {
            await next();
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            app.emit('error', err, this);
            const status = err.status || 500;
            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error_msg = status === 500 && app.config.env === 'prod'
                ? 'Internal Server Error'
                : err.message;
            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = ctx.apijson(status,error_msg,'')
            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = status;
        }
        console.log('::::error中间件end')
    };
};