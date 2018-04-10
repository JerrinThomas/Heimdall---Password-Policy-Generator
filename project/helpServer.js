const db = require('./database.js');
const rn = require('random-number');
const promise = require('promise');

var includechar,avoidchar;
var includesym = {
  e1 : '',
  e2 : ''
};

var includeSymbols  = function(){
  return new Promise( function(resolve, reject){
    db.con.query("select * from freqtab order by freq limit 2;",(error,result,field) => {
        if(error) throw error;
        includesym = {e1 : result[0].symbol, e2 : result[1].symbol};
        resolve(includesym);
      });
 });
}
var includeNums  = function(){
    return new Promise( function(resolve, reject){
      db.con.query("select * from freqtabnum order by freq limit 2;",(error,result,field) => {
          if(error) throw error;
          includenum = {e1 : result[0].symbol, e2 : result[1].symbol};
          resolve(includenum);
        });
   });
  }
var includeChars  = function(){
    return new Promise( function(resolve, reject){
      db.con.query("select * from freqtabcap order by freq limit 1;",(error,result,field) => {
          if(error) throw error;
          db.con.query("select * from freqtabsmall order by freq limit 1;",(error,resultsmall,field) => {
            if(error) throw error;
            result = result.concat(resultsmall);   
            includechar = {e1 : result[0].symbol, e2 : result[1].symbol};
            resolve(includechar); 
          });
        });
   });
}
var avoidChar = function(){
    return new Promise( function(resolve, reject){
        db.con.query("select * from freqtabcap order by freq desc limit 1;",(error,result,field) => {
            if(error) throw error;
            db.con.query("select * from freqtabsmall order by freq desc limit 1;",(error,resultsmall,field) => {
              if(error) throw error;
              result = result.concat(resultsmall);   
              avoidchar = {e1 : result[0].symbol, e2 : result[1].symbol};
              resolve(avoidchar); 
            });
          });
     });
}
var policyControl = function(includesym,includechar,avoidchar,includenum){
  return new Promise( function(resolve, reject){
    db.con.query("select id from policytab where inchar1 = '"+includechar.e1+"' and inchar2 = '"+includechar.e2+"' and insym1 = '"+includesym.e1+"' and insym2 = '"+includesym.e2+"' and innum1 = '"+includenum.e1+"' and innum2 = '"+includenum.e2+"'and avchar1 = '"+avoidchar.e1+"'and avchar2 = '"+avoidchar.e2+"'",function(e,pid,f){
       if(e) throw e;
       if(pid.length != 0)
           resolve(pid[0].id);
       else 
          reject();
    });
  });
}
var exploration = function(){
    return new Promise( function(resolve, reject){
    includeSymbols()
    .then((insym) => {
         includeChars()
         .then((inchar) => {
            avoidChar()
            .then((avchar) =>{
              includeNums()
              .then((innum) => {
                policyControl(includesym,includechar,avoidchar,includenum).then((pid)=>{
                  resolve([includesym,includechar,avoidchar,includenum,pid]);
                }).catch(()=>{
                  db.con.query("insert into policytab(inchar1,inchar2,insym1,insym2,innum1,innum2,avchar1,avchar2) values('"+inchar.e1+"','"+inchar.e2+"','"+insym.e1+"','"+insym.e2+"','"+innum.e1+"','"+innum.e2+"','"+avchar.e1+"','"+avchar.e2+"');",(error) => {
                    if(error) throw error;
                    db.con.query("select id from policytab order by id desc;",(error,res) => {
                      if(error) throw error;
                      resolve([includesym,includechar,avoidchar,includenum,res[0].id]);            
                    });      
                  });
                });             
              });
        });  
    });
 });
});
}

module.exports = {
  exploration
};
