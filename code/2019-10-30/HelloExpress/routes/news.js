var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('news here');
});

router.get('/list',function(req,res,next){
  res.end('news list');
})

module.exports = router;