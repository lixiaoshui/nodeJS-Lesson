const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer(function(req,res){
    var filepath = path.join(__dirname,"/index.html");
    var htmlContent = fs.readFileSync(filepath);
    htmlContent = htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();

    fs.readFile("./1.png",function(err,data){
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(data);
        res.end();
    })
}).listen(8081);
console.log("server is listening 8081");