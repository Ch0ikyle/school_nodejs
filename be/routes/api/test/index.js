var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  res.send({ msg:'hi', a:1});
});

router.get('/ab', function(req, res, next){
  res.send({ msg:'ab', a : 1 });
});

router.get('/abc', function(req, res, next){
  res.send({ msg:'abc', a : 1 });
});

router.all('*', function(req,res,next){
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;
