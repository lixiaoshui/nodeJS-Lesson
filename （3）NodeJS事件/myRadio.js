const util = require("util");

function Parent(){
    this.name = name;
}
Parent.prototype.show = function(){
    console.log(this.name);
}
function Child(){

}
util.inherits(Child,Parent);
/**
 * 三种实现继承的方式
 * 1、Parent.call(this)  Child.prototypr.__proto__ == Parent.prototype;
 * 
 * 2.Child extends Parent{}
 * 3.util.inherits(Child,Parent)
 */