var dog = require("./dog.js");
var dog1 = new dog("teddy",5);

function barkFun(){
    console.log(this.name + " barked!" );
    console.log(this.energy);
}

dog1.on("bark",barkFun);
var intervalid = setInterval(function(){
    if(dog1.energy >= 0){
        dog1.emit("bark");
    }
    else{
        clearInterval(intervalid);
    }
    dog1.energy = dog1.energy-1;
},1000);
