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
  hs.exploration().then((val)=> {
    res.render('dbsignup',{
      insym : val[0],
      inchar : val[1],
      avchar : val[2],
      innum : val[3]
    });
  });
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
   var color1 = parseInt(req.body.color1);
   var color2 = parseInt(req.body.color2);
   var email = req.body.email;
   let now = new Date();
   var login_time = date.format(now, 'YYYYMMDDHHmm');
   hg.salt_hash_gen(password,login_time,color1,color2)
    .then( (key) => {
      hg.updatedb(uname,email,login_time,key);
      processPass.processAndUpdateTable(password).then(() => {} );
      console.log(key);
      res.redirect('/dblogin.html');

    });

});
app.listen( port ,()=> console.log( 'Server Is Up @localhost:'+port ));
