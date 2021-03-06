var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use('/api', require('./routes/api'));
// console.log(path.join(__dirname, '../', 'fe', 'dist'))
app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({msg : err.message});
});

module.exports = app;

const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true}, (err) => {
  if (err) return console.error(err);
  console.log('mongoose connected!');

  User.create({name : '하하'})
    .then(r => console.log(r))
    .catch(e => console.error(e))

  // User.find()
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e))
  // User.updateOne({_id : '5cbd1e4efa4cae0b1ed7b30e'}, { $set : { age:27}})
  //   .then(r => {
  //     console.log(r);
  //     console.log('updated');
  //     return User.find();
  //   })
  //   .catch(e => console.error(e));

  // User.deleteOne({ name : '하하'})
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e))
  
});