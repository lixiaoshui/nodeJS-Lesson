const https = require("https");

/**
 * https是在http基础上进行了SSL加密
 * 让数据不在明文传输
 */
https.get("https://www.baidu.com/",function(res){
    var result="";
    res.on("data",function(chunk){
        result += chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})