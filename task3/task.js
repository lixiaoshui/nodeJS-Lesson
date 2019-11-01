const { chapterList, userList} = require('./task0');
const http = require('http');
const fs = require('fs');
const path = require('path');
var URL = require('url');
var Id=0;
var nowChapter = {};
http.createServer((req,res)=>{
    if(req.url === '/login'){
        var listPath = path.join(__dirname,'login.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(listPath,'utf-8',(err,data)=>{
            if(err){
                // console.error(message);
            }else{
                res.end(data);
            }
        })
    }
    else if(req.url === '/addChapter/'){
        var listPath = path.join(__dirname,'addChapter.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(listPath,'utf-8',(err,data)=>{
            if(err){
                // console.error(message);
            }else{
                res.end(data);
            }
        })
    }
    else if(req.url === '/list'){
        var listPath = path.join(__dirname,'chapterList.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(listPath,'utf-8',(err,data)=>{
            if(err){
                // console.error(message);
            }else{
                res.end(data);
            }
        })
    }
    else if(req.url == '/a/'){
        res.write(JSON.stringify(chapterList));
        res.end();
    }
    else if(URL.parse(req.url).pathname == '/detail'){
            var listPath = path.join(__dirname,'chapter.html');
            Id=URL.parse(req.url).query.replace(/chapterId=/,"")-1;
            res.writeHead(200,{'Content-Type':'text/html'});
            fs.readFile(listPath,'utf-8',(err,data)=>{
                if(err){
                    // console.error(message);
                }else{
                    res.end(data);
                }
            })
    }
    else if(URL.parse(req.url).pathname == '/listmanager'){
        console.log(URL.parse(req.url, true).query.username);
        if(URL.parse(req.url, true).query.username == userList[0].username && URL.parse(req.url, true).query.pwd ==userList[0].pwd ){
            var listPath = path.join(__dirname,'list.html');
            res.writeHead(200,{'Content-Type':'text/html'});
            fs.readFile(listPath,'utf-8',(err,data)=>{
                if(err){
                    // console.error(message);
                }else{
                    res.end(data);
                }
            })
        }else{
            res.end('用户名或密码错误');
        }
    }
    else if(req.url == '/art/'){
        res.write(JSON.stringify(chapterList));
        res.end();
    }else if(req.url == '/nowChapter/'){
        res.writeHead(200,{'Content-Type':'text/json'});
            nowChapter=chapterList[Id];  
            res.end(JSON.stringify(nowChapter));
    }else if(req.url == '/add'){
        req.on("data", function(chunk){
            dataObj += chunk;
        });
        req.on('end',function(){
            res.setHeader('标题1','人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。');
            res.end('success');
        })
    }else if(req.url !== '/'){
        var cpurl = '.'+req.url;
        res.writeHead(200,{'Content-type':"text/css"});
        fs.readFile(cpurl, function(err, data) {
            if (err) {
        //         console.error(err);
            }else{
                res.end(data);
            }
        });
    }
}).listen(8083);