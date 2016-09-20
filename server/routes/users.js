var express = require('express');
var router = express.Router();
var user1 = require('../model/user');
var app =express();


/* GET users listing. */


app.get('/', function(req,res){
  res.send("send reponse");
});

app.post('/userinsert/:userid/:password',function(req,res){
  var user = new user1();
  user.username = req.params.userid;
  user.password = req.params.password;
  user.save(function(err){
    if(err){
      res.send(err);
    }
    else {
      res.send("User created");
    }
  })
})

module.exports = app;
