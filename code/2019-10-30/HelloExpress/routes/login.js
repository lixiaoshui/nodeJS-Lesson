var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     var pathName = path.join(__dirname,'../html/login.html');
//     var loginContent = fs.readFileSync(pathName);
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.send(loginContent);
//     // res.send('hello');
// });

router.get('/',function(req,res,next){
    res.render('login');
  })

router.get('/list',function(req,res,next){
  res.end('users list');
})

module.exports = router;