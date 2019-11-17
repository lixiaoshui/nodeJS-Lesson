var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next){
  // render页面的渲染 会读取ejs文件内容，将文件中占位符<%=userName %> 替换成后端给定的数据（也就是render的第二个参数）
  // 再将文件中代码内容响应到客户端上
  res.render('list',{userName:'zhangsan',newList:[
    {'newId':1,'newTitle':'英国通过“12月12日提前大选”的议案'},
    {'newId':2,'newTitle':'温暖心灵'}
  ]});//访问list页面出现list.ejs表示的页面 有背景色
})

router.get('/index/list',function(req,res,next){
  res.end('list');
})
module.exports = router;
