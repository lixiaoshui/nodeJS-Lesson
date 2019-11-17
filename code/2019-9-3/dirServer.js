//1.引入http原生模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
//2.创建服务器createServer  只要有http请求，访问端口 就会执行回调函数里面的内容
var server = http.createServer(function(req,res){
    

    //req.url表示url地址中，端口以后的内容
    // 使用url.parse将req.url转化为对象，对象提取pathname（过来请求资源路径）
    console.log(req.url);

    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    // 根据资源路径可以决定执行哪一段代码
    if(urlPathName=="/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
         
    //4、当客户端http请求发起的时候，才会执行回调函数里面的内容
        var htmlPath = __dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        console.log(htmlPath);
        htmlContent = htmlContent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathName == "/js/index.js"){
        var jsPath = path.join(__dirname,"/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        jsContent = jsContent.toString("utf8");
        // console.log(jsContent);

        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }   
});
//3.监听一个端口
server.listen(8081);
console.log("server is listening 8081");