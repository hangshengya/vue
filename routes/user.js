var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  // console.log(req.query);
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
  var address='mongodb://127.0.0.1:27017/vuedata';
  mongoCt.connect(address,function(err,db){
    if(err){
      console.log('databse error homelist')
    }else{
    	console.log('链接成功');
      var user= db.collection('user');
      // console.log(blog);
      // req.query.page
      user.find({}).toArray(function(err,result){
          res.send(result);//返回给前端
       
      });
    }
  })
});

module.exports = router;
