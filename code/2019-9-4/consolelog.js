/*
    调试：
    1.检测代码是否执行到console.log的位置
    2.可以输出一些变量的值，判断程序的执行状态
*/
/**
 * 占位符：%d %s %j
 * %s表示字符串
 * %d表示数字
 * %j表示json数组
 */
var user = {
    username:"zhangsan",
    age:20,
    qq:"12345678"
}
console.log("username:%s",user.username);
console.log("age:%d",user.age);
console.log("user:%j",user);