const hs = require('./helpServer.js');
const db = require('./database.js');
const processPass = require('./processPass');

const express = require('express');
const ejs = require('ejs');
const hg = require('./hashgen.js');
let date = require('date-and-time');

const port = process.env.PORT || 8080;

var app =express();
app.set('view engine','ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/views/public'));

app.get('/signup',function(req,res) {
  var y =Math.random();
  if(y<0.5)
   y =Math.floor(y)
  else
   y= Math.ceil(y)
if(y == 0){  
  hs.exploration().then((val)=> {
    res.render('dbsignup',{
      insym : val[0],
      inchar : val[1],
      avchar : val[2],
      innum : val[3],
      pid : val[4]
    });
  });
}
else{
  processPass.comDet().then((r)=>{
    var q = "select * from  policytab where id = "+r+";";
    db.con.query(q, (error,v) => {
    if (error) throw error;
       res.render('dbsignup',{
          insym : { e1 : v[0].insym1, e2 : v[0].insym2},
          inchar : { e1 : v[0].inchar1, e2 : v[0].inchar2},
          avchar : { e1 : v[0].avchar1, e2 : v[0].avchar2},
          innum : { e1 : v[0].innum1, e2 : v[0].innum2},
          pid : r
      });
    });
  });
 }
});
app.post('/postlogin', function(req, res) {
  var uname = req.body.uname;
  var password = req.body.pwd;
  var color1 = parseInt(req.body.color1);
  var color2 = parseInt(req.body.color2);
  //console.log(uname, password, color1, color2);
  hg.check_hash(uname, password, color1, color2)
  .then(() =>{
     res.send('Same');
  })
  .catch(()=>{
    res.send('Not Same');
  });
});
app.post('/postsignup', function(req, res) {
   var uname = req.body.uname;
   var password = req.body.pwd;
   var pid = parseInt(req.body.pid);
   var color1 = parseInt(req.body.color1);
   var color2 = parseInt(req.body.color2);
   var email = req.body.email;
   let now = new Date();
   var login_time = date.format(now, 'YYYYMMDDHHmm');
   hg.salt_hash_gen(password,login_time,color1,color2)
    .then( (key) => {
      hg.updatedb(uname,email,login_time,key);
      processPass.processAndUpdateTable(password,pid).then(() => {} );
      console.log(key);
      res.redirect('/dblogin.html');

    });

});
app.listen( port ,()=> console.log( 'Server Is Up @localhost:'+port+'/signup' ));
