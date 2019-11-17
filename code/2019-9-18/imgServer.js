//响应图片相关代码
const http  = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
http.createServer(function(req,res){
    // fs.readFile("./1.png",function(err,data){
    //     res.writeHead(200,{"Content-Type":"image/png"});
    //     res.write(data);
    //     res.end();
    // })

    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathName;
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getdata"){
        var list = [{"username":"zhangsan","age":20}];
        var str = JSON.stringify(list);
        res.end(str);
    }
    
}).listen(8081);