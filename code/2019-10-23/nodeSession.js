const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case '/':
            showLogin(res);
            break;
        case '/login':
            loginIn(req,res);
            break;
        case '/home':
            showHome(req,res);
            break;
    }
}).listen(8082);
function showLogin(res){
    var filePath = path.join(__dirname,'./login.html');
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Tyte':'text/html'});
    res.write(fileContent);
    res.end();
}

var sessions = {};
function loginIn(req,res){
    var formData = '';
    req.on('data',function(chunk){
        formData += chunk;
    })
    req.on('end',function(){
        // console.log(formData);
        var formObj = querystring.parse(formData);
        if(formObj.username == '2017011832' && formObj.pwd == '1111'){
            var session = {
                sessionId:(new Date()).getTime() + Math.random(),
                exipire:(new Date()).getTime() + 6099999999,
                userName:'2017011832'
            }
            sessions[session.sessionId] = session;
            res.setHeader('Set-Cookie','sessionId='+ session.sessionId);
            res.end('login success');
        }
        else{
            res.end('login error');
        }
    })
}
function showHome(req,res){
    var cookie = req.headers['cookie'];
    console.log(cookie);
    if(cookie == undefined){
        showLogin(res);
    }
    var cookieArr = cookie.split(';');
    var cookieObj = {};
    for(var i=0;i<cookieArr.length;i++){
        var cookiePair = cookieArr[i].split('=');
        cookieObj[cookiePair[0].trim()] = cookiePair[1];//属性名是第一个元素，属性值是第二个元素
        console.log(cookiePair);
    }
    var sessionId = cookieObj.sessionId;
    for(var key in sessions){
        if(key == sessionId){
            var session = sessions[key];
            if((new Date()).getTime() < session.exipire){
                res.end('home page');
            }
            else{
                showLogin(res);
            }
        }
    }
    console.log(cookieObj);
}
console.log('server is listening 8082');