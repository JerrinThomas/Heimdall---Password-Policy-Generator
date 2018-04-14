const hs = require('./helpServer.js');
const db = require('./database.js');
const processPass = require('./processPass');

const express = require('express');
const ejs = require('ejs');
var session = require('express-session');
const hg = require('./hashgen.js');
let date = require('date-and-time');
var request = require('request');

const port = process.env.PORT || 8080;

var app =express();
app.set('view engine','ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(session({
                 secret: "Shh, its a secret!",
                 resave: true,
                 saveUninitialized: true,
                 cookie: { maxAge : 900000 }
}));
app.use(express.static(__dirname + '/views/public'));
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

app.get('/check',function(req,res){
  var q = req.query;
  console.log(q);
  if(q.opt == 1){
    db.con.query("select uname from name_time_warehouse where uname = '"+q.uname+"';", (error,u) => {
      if (error) throw error;
      if( u.length != 0 ) 
        res.send('Username Already Exists'); 
      else
        res.send('Valid Username');  
   });
  }
  else if(q.opt == 2){
   db.con.query("select email from name_time_warehouse where email = '"+q.email+"';", (error,e) => {
     if (error) throw error;
      if( e.length != 0 ) 
         res.send('Email Already Exists');
      else 
        res.send('Valid Email');
  }); 
 }
 else if(q.opt == 3){
  db.con.query("select mobile from name_time_warehouse where uname = '"+q.mobile+"';", (error,u) => {
    if (error) throw error;
    if( u.length != 0) 
       res.send('Mobile Number Already Exists');
    else if(q.mobile.length != 10)
       res.send("Invalid Mobile Number"); 
    else 
      res.send('Valid Mobile Number');  
 });
 }
 else if(q.opt == 4){
  db.con.query("select uname from name_time_warehouse where uname = '"+q.uname+"';", (error,u) => {
    if (error) throw error;
    if( u.length != 0 ) 
      res.send('Username is Valid'); 
    else
      res.send('Invalid Username');  
 });
}
 
});
app.get('/login',function(req,res){
  res.render('dblogin',{
    error : ''
  })
})
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
      db.con.query('select pid,count(pid) cnt from pass group by pid order by cnt',(error,r,f)=>{
        if(error) throw error;
           db.con.query("select * from  policytab where id = "+r[0].pid,(error,v,f)=>{
            
            res.render('dbsignup',{
              insym : { e1 : v[0].insym1, e2 : v[0].insym2},
              inchar : { e1 : v[0].inchar1, e2 : v[0].inchar2},
              avchar : { e1 : v[0].avchar1, e2 : v[0].avchar2},
              innum : { e1 : v[0].innum1, e2 : v[0].innum2},
              pid : v[0].id
            }); 
           })
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
  if(uname == '' || password == '' || color1 == '' || color2 == '')
    res.send('<body style="background-color:#9b59b6;">Please Enter Some Valid Data <br><a href = "/index.html">SafePlace</a>');
  else{
  hg.check_hash(uname, password, color1, color2)
  .then((uid) =>{
     req.session.user = uname;
     req.session.pass = password;
     req.session.uid = uid;
     res.redirect('/index');
  })
  .catch(()=>{
    res.render('dblogin',{
      error : "Sorry Try Again..."
    });
  });
 }
});
app.post('/postsignup', function(req, res) {
   var uname = req.body.uname;
   var password = req.body.pwd;
   var mobile = req.body.mobile;
   var pid = parseInt(req.body.pid);
   var color1 = parseInt(req.body.color1);
   var color2 = parseInt(req.body.color2);
   var email = req.body.email;
   console.log(uname,password,pid,color1,color2,mobile)
   if(uname == '' || password == '' || color1 == '' || color2 == '' || pid == '' || email == '')
    res.send('<body style="background-color:#9b59b6;">Please Enter Some Valid Data <br><a href = "/index.html">SafePlace</a>');
   else {
   let now = new Date();
   var login_time = date.format(now, 'YYYYMMDDHHmm');
   
   hg.salt_hash_gen(password,login_time,color1,color2)
    .then( (key) => {
      hg.updatedb(uname,email,login_time,key,mobile,pid);
      processPass.processAndUpdateTable(password,pid).then(() => {} );
      console.log(key);
      res.render('dblogin',{
        error : ''
      });

    });
  }
});
var auth = function(req, res, next){
    if (req.session && req.session.user && req.session.pass && req.session.uid)
        return next();
    else
        return res.redirect('/login');
}
app.get('/index',auth,function(req,res){
  db.con.query("select * from accnt where uid = "+req.session.uid+"",(e,u,f)=>{
    res.render('index',{
      row : u
    });   
  });
});
app.post('/tabcontainer',function(req,res){
  console.log("TabConEntered")
  if(req.session.uid === undefined)
       res.status(404).send('Not found');
  else
  db.con.query("select * from accnt where uid = "+req.session.uid+"",(e,u,f)=>{
    res.render('tabcontainer',{
      row : u
    });   
  });
});
app.post('/search',function(req,res){
  var val = req.body.val;
  if(req.session.uid === undefined)
       res.status(404).send('Not found');
  else
  db.con.query("select * from accnt where uid = "+req.session.uid+" and sitename like '%"+val+"%' ",(e,u,f)=>{
    res.render('tabcontainer',{
      row : u
    });   
  });
});

app.post('/tabvisit',function(req,res){
  console.log("TabVisitEntered")
  var aid = req.body.aid;
  db.con.query("select * from accnt where aid = "+aid+"",(e,u,f)=>{
    var v = JSON.stringify(u[0]);
    res.send(v);   
  });
});
app.get('/logout',function(req,res){
  req.session.destroy(function(err) {
  });
  res.render('dblogin',{
    error : "Come Back Soon..."
  });
});
app.post("/deleteaccnt",function(req,res){
  var aid = req.body.aid;
  res.send("S");
  db.con.query("delete from accnt where aid = "+aid, (e,r,f)=>{
    if(e) throw e;
  });
});
app.post("/editaccnt",auth,function(req,res){
  var uname = req.body.username;
  var pass = req.body.password;
  var aid = req.body.aid;
  console.log("Entered")
  db.con.query("update accnt set username = '"+uname+"'  where aid = "+aid, (e,r,f)=>{
    if(e) throw e;
    console.log("Yaahooo");
  });
  res.send("S");
  
});

app.post('/postaccnt',function(req,res){
  var sitename = req.body.sitename;
  var fname = req.body.fname;
  var furl = req.body.furl;
  var fpassword = req.body.fpassword;
  console.log(sitename,req.session.uid,fname,furl,fpassword);
  if(req.session.uid === undefined)
       res.status(404).send('Not found');
  else
  db.con.query("insert into accnt(uid,sitename,siteurl,username,password) values("+req.session.uid+",'"+sitename+"','"+furl+"','"+fname+"','"+fpassword+"')",function(err,result,f){
     if(err) throw err;
     db.con.query("select aid from accnt where uid = "+req.session.uid+" and sitename = '"+sitename+"'",(error,id)=>{ 
       if(error) throw error;
        var a = id[0].aid;
        var b = a.toString(10); 
        res.send(b);
     });
  });
});
app.get("/forgotmypassword",function(req,res){
res.render("forgot");
});

app.post("/forgot",function(req,res){
  var uname = req.body.username;
  req.session.uname = uname;
  db.con.query("select pid,mobile from name_time_warehouse where uname = '"+uname+"'", (e,r,f)=>{
    if(e) throw e;
      if(r.length != 0){
        req.session.otp = Math.floor(10000 + Math.random() * 90000);
        req.session.pid = r[0].pid;
        request("http://localhost/sms_server/sendsms.php?uid=8281860141&pwd=M2826E&phone="+r[0].mobile+"&msg= Dear user your OTP is "+req.session.otp+"", function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        });
        res.send('Enter The OTP sent to your Mobile : <input id="otp"><br><button onclick = "otpgo()">Check OTP</button>');
      }
      else 
      {
        res.send("Invalid Username");
      }
  });
});

app.post("/forgot_try",function(req,res){
  var otp = req.body.otp;
  if(req.session.otp === undefined){
    res.send("Session Expired Retry...")
  }
  else {
    if(otp == req.session.otp)
    {
      db.con.query("select * from  policytab where id = "+req.session.pid,(error,v,f)=>{   
        res.render('forgot_try',{
          insym : { e1 : v[0].insym1, e2 : v[0].insym2},
          inchar : { e1 : v[0].inchar1, e2 : v[0].inchar2},
          avchar : { e1 : v[0].avchar1, e2 : v[0].avchar2},
          innum : { e1 : v[0].innum1, e2 : v[0].innum2},
          pid : v[0].id
        }); 
       })
    }
    else
    {
      res.send("try again...");
    }
  }
});

app.listen( port ,()=> console.log( 'Server Is Up @localhost:'+port+'/' ));
