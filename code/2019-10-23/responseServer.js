const http = require("http");
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'});
    //表示响应内容的字节长度
    res.setHeader('Content-Length',10);
    // res.setHeader('Content-Encoding','gzip);服务器压缩资源设置
    res.setHeader('Data',(new Date()).toLocaleDateString());//响应的时间

    res.setHeader('Set-Cookie','name=zhangsan');
    res.statusCode = 404;
    res.end('hello node');

}).listen(8081);
console.log('server is listening 8081');