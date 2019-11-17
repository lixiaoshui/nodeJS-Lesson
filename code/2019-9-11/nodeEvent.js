//1、引入events模块
const events = require("events");
// console.log(events);
//实例化event对象
var eventEmitter = new events.EventEmitter();
//监听事件对象（绑定事件）

//once表示只触发一次事件
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
//事件触发  可以进行参数的传递  可以进行多次的事件触发
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");
