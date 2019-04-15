var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api', function(req, res, next){
  res.send({ a : 1 });
});

router.use('/test', require('./test'));
router.use('/user', require('./users'));

router.all('*', function(req,res,next){
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;
