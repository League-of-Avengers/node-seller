

/**
 * excel.js 生成 Excel 文档
 */


var Excel = require('exceljs');


// 生成一个文件 
var workbook = new Excel.Workbook();


// // 作者
// workbook.creator = 'Me';
// // 上一次保存者
// workbook.lastModifiedBy = 'Her';
// // 创建内容的事件
// workbook.created = new Date(1985, 8, 30);
// // 最后一次保存的日期
// workbook.modified = new Date();
// // 最后一次打印的事件
// workbook.lastPrinted = new Date(2016, 9, 27);
// //  将工作簿日期设置为1904日期系统
// workbook.properties.date1904 = true;

// // 视图用于控制Excel如何显示工作表
// workbook.views = [
//     {
//       x: 0, y: 0, width: 10000, height: 20000,
//       firstSheet: 0, activeTab: 1, visibility: 'visible'
//     }
// ]


// 添加一个 sheet 工作表, 第二个可选参数指定工作表的选项
// var sheet = workbook.addWorksheet('My Sheet');
var sheet = workbook.addWorksheet('My Sheet', {properties:{tabColor:{argb:'FFC0000'}}});

// 设置 sheet 页的列的信息
sheet.columns=[
    {header:'第一列',key:'id',width:10},
    {header:'第二列',key:'name',width:20},
    {header:'第三列',key:'age',width:10},
]

// sheet 表的数据
var rows = [
    [1,'xiedajian',20],     // 数据格式1： 可以直接为数组
    [2,'xiedajian2',22],
    {id:3,name:'xiedajian3',age:23},    // 数据格式也可以用sheet列信息的key写为json
    [4,'xiedajian4',22],
]

// 设置行数据
sheet.addRows(rows)                     // 写多行
sheet.addRow([5,'xiedajian5',25])      // 写单行

// 路径
var path = 'demo.xlsx'

workbook.xlsx.writeFile(path).then(()=>{console.log(`生成excel成功： ${path}`)})





