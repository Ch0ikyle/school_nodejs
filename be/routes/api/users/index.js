var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users');

// router.get('/', function(req,res,next){
//     const us = [{
//         name:'테스트01',
//         age: 14
//     },
//     {
//         name : '테스트02',
//         age : 24
//     }]
//     res.send({users : us})
// });

router.get('/', function(req,res,next){
    User.find()
      .then(r => {
          res.send({ success: true, users: r})
      })
      .catch(e => {
          res.send({ success: false})
      });
});

router.post('/', function(req,res,next){
    
    const { name, age } = req.body;
    const u = new User({ name, age});
    u.save().then(r => { res.send({success:true, msg: r})}).catch(e => { res.send({ success : false, msg: e.message})})
});

router.put('/', function(req,res,next){
    console.log(req.query);
    console.log(req.body);

    res.send({ success: true, msg : 'put ok'});
});

router.delete('/', function(req,res,next){
    console.log(req.query);
    console.log(req.body);

    res.send({ success: true, msg : 'delete ok'});
});

router.all('*', function(req,res,next){
    next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;