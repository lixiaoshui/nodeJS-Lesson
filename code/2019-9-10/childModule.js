function sayHello(){
    console.log("hello world");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";
// 将方法对外公布
module.exports = {
    sayHello:sayHello,
    showName:showName,
    userName:userName
}