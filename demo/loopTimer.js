var time = setInterval(function loop(){
    console.log("I will loop forever!");
},500);
setTimeout(function(){
    console.log("Game over");
    clearInterval(time);
},5000);