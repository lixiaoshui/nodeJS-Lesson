// 主模块
// 将定义的模块引入进来
/**
 * 
 * 自定义模块，自定义js文件，通过require来引入
 * require（相对路径）
 * 被引入模块通过module.exports来对外公布自己的一些方法或者属性
 * 主模块可以访问被引用模块公布的方法和属性
 */
var child = require("./childModule.js");

// console.log(child);    //{sayHello: [Function:sayHello] }
child.sayHello();//hello world
child.showName();