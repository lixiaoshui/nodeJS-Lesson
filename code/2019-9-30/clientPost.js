const http =require("http");
const querystring= require("querystring");
var infor = {"user":"zhangsan"};
var str = querystring.stringify(infor);
var options = {
    host :"localhost",
    post:8081,
    path:"/",
    method:"post"
}
var req = http.request(options,function(res){

})

req.write(str);
req.end();


