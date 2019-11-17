setTimeout(function(){
    console.log("异步执行");
},3000);
console.log("main program");
// 异步执行两者不用相互等待
// 异步操作不会阻塞程序的执行
/*
1、营业厅排队办理业务，应用程序执行的阻塞
2、取号办理业务的方式，（应用执行的异步操作
*/