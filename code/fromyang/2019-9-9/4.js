var timerId = setInterval(function(){
    console.log("game over");
},1000);
//阻止延迟执行或者定时执行回调函数的执行
timerId.unref();
timerId.ref();