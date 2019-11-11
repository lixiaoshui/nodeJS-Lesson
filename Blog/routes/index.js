var express = require('express');
var router = express.Router();
var data = require('../data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/list', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
    if(username == data.users[0].username && password == data.users[0].password){
      res.render('list', {data});
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end('用户名密码输入错误!');
    }
});
module.exports = router;