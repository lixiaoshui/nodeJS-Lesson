function Bomb(message){
    this.message = message;
    this.explode = function(){
        console.log(message);
    }
}
var bomb = bomb("bomb!!!");
setTimeout(function(){
    explode();
},2000);