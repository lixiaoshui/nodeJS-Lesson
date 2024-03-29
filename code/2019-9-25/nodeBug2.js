const fs = require("fs");
/**
 * try catch 只能捕获同步代码中的异常
 */
try{
    fs.readFile(__filename,function(err,data){
        if(err){
            console.log("error");
        }
        else{
            console.log(data);
        }
    });
}catch(error){
    console.log(error.message);
}
//可以捕获到 所有异常
process.on("uncaughtException",function(err){
    if(err){
        console.log(err);
    }
})