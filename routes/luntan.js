var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;


router.get('/', function(req, res, next) {
  // console.log(req.query);
  var address='mongodb://127.0.0.1:27017/vuedata';
  mongoCt.connect(address,function(err,db){
    if(err){
      console.log('databse error homelist')
    }else{
      var luntan = db.collection('luntan');
      // console.log(blog);
      // req.query.page
      luntan.find({}).toArray(function(err,result){
        res.send(result);//返回给前端
      });
    }
  })
});

module.exports = router;
