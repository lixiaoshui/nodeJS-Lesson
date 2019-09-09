const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req,res){
    var htmlpath = path.join(__dirname,"./views/view.html");
    var htmlContent = fs.readFileSync(htmlpath);
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
server.listen(8080);
console.log("server is listening 8080");