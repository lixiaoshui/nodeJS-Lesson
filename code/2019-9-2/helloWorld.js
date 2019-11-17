const http = require("http");

var server = http.createServer(function(req,res){
    // 固定的请求对象和访问对象
    res.write("hello world");

    //http协议，包含协议的结构，协议的请求响应过程
    //状态码
    res.writeHead(200,{"Contebt-Type":"text/plain"});
    res.write("<h1>hello world</h1>");

    // 响应结束    
    res.end();
});
// 代码是服务端程序

server.listen(8081);
console.log("server is listening 8081");
// shift+鼠标右键  点击打开powershell窗口
// 编译node.js文件   node + 文件名
// 记得每次修改了js文件后，需要重新执行 node + 文件名
// 在node中的js文件，必须要编译才能执行
