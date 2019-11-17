//实现文件的上传
const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == '/'){
        var fileContent = fs.readFileSync("postFile.html");
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == '/upload'){
        var strData = "";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
            var dataarr = strData.split('\r\n');
            // console.log(dataarr);
            var fileData = dataarr.slice(4,dataarr-2);
            fileData = fileData.join('\r\n');
            var buf = Buffer.from(fileData,"binary");

            fs.writeFileSync("file.png",buf,{"encoding":"binary"});
            // console.log(fileData);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
            res.end("提交成功");
        })
    }
}).listen(8081);
console.log("server is listening 8081");