var circleModule = require("./circleModule.js");
var r = process.argv[2];//传入数据
var circleObj = circleModule.circleFun(r);
console.log("周长是："+circleObj.circumference());
console.log("面积是："+circleObj.area());

/**
 * 1、原生模块，随环境安装就存在的
 * 2、自定义模块，自己填写的程序
 * 3、第三方模块，在命令行中来进行安装的模块，从npm服务器上下载到本地的，直接require("date-now");
 */