var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;

let requi={}
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
      user.find({username:req.query.username,password:req.query.password}).toArray(function(err,result){
        if(result.length){
          requi.status=0;
          console.log('登录成功');
         
          req.session['user_id']=result[0];
        }else{
          console.log('用户名或者密码错误')
          requi.status=1;

        
        }
          res.send(requi);//返回给前端
       
      });
    }
  })
});

module.exports = router;
