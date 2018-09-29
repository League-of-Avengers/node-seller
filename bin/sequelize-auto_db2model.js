/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/6
 * Time: 14:01
 */

// 一次性脚本

// 利用 sequelize-auto 对照 数据库的表 自动生成相应的 model模型

// 前提条件
// 1. npm install egg-sequelize-auto
// 2. 数据库已经建好表结构
// 3. 已安装mysql驱动    npm i mysql2


'use strict';
// host: '192.168.1.209',
// port: 3306,
// database: 'copy_contrast',
// username: 'root',
// password: 'mysqlzhdzeyadkjcau62',

const EggSequelizeAuto = require('egg-sequelize-auto');

const auto = new EggSequelizeAuto('copy_contrast', 'root', 'mysqlzhdzeyadkjcau62', {
	host: '192.168.1.209',
	dialect: 'mysql',           // 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
	directory: '../app/model',        // 生成文件的目录
	port: '3306',
	additional: {
		//...
	},
	tables: ['platform','source','video']
	//...
})

// start
auto.run(function (err) {
	

	if (err) throw err;
	console.log('=======开始======');
	console.log(auto.tables); // table list
	console.log(auto.foreignKeys); // foreign key list
	console.log('=======结束======');
});