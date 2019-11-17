const events = require("events");
const EventEmitter = events.EventEmitter;
//定义dog的构造函数
function Dog(dogName){
    //1、执行一遍父构造函数，并且this指向是子构造函数的
    EventEmitter.call(this);
    this.dogName = dogName;
    var that = this;
    setTimeout(function(){
        //that触发了bark这个事件
        that.emit("bark");
    },3000);
}

//2、子构造函数继承了父构造函数prototype上的相关方法
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog  = new Dog("kitty");
//添加一个事件监听
dog.on("bark",function(){
    console.log(this.dogName + " can bark");
})