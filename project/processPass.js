const db = require('./database.js');

var comp = (password)=>{
  var n = 0;
  return new Promise( function(resolve, reject){
     if(/[A-Z]/.test(password))
        n++;
     if(/[a-z]/.test(password))
        n++;
     if(/\d/.test(password))
        n++;
     if(/[^A-Za-z0-9]/.test(password))
        n++;
     resolve(n);
  });
}

var alt = (password)=>{
    var n = 0;
    return new Promise( function(resolve, reject){
        console.log(password);
       if(/[A-Z][a-z]/.test(password))
        { n++; console.log(`'[A-Z][a-z]'`);} 
       if(/[a-z][A-Z]/.test(password))
        { n++; console.log(`'[a-z][A-Z]'`);} 
       if(/[a-z][0-9]/.test(password))
       { n++; console.log(`'[a-z][0-9]'`);} 
       if(/[A-Z][0-9]/.test(password))
       { n++; console.log(`'[A-Z][0-9]'`);} 
       if(/[a-z][^A-Za-z0-9]/.test(password))
       { n++; console.log(`'[a-z][^A-Za-z0-9]'`);} 
      // if(/([a-z])^\1/.test(password))
      // { n++; console.log(password.match(/([a-z])\1/));} 
       resolve(n);
    });
}
var altnew = (password) => {

}
  
alt('Azinmakaranth()183').then((n)=> console.log(n));
alt('ss55').then((n)=> console.log(n));

var processAndUpdateTable = (password) => {
  var passArray = password.split("");
  return new Promise( function(resolve, reject){
    passArray.forEach( e => {
       if(/[a-z]/.test(e)){
        var q = "UPDATE freqtabsmall SET freq = freq+1 where symbol = '"+e+"';";
        db.con.query(q, (error) => {
        if (error) throw error;
        console.log("Executed Query :- "+ q +" "+ e );
        });
       }
       else if(/[A-Z]/.test(e)){
        var qu = "UPDATE freqtabcap SET freq = freq+1 where symbol = '"+e+"';";
        db.con.query(qu, (error) => {
        if (error) throw error;
        console.log(`Executed Query :- ${qu}`);
        });
       }
       else if(/[0-9]/.test(e)){
        var quer = "UPDATE freqtabnum SET freq = freq+1 where symbol = '"+e+"';";
        db.con.query(quer, (error) => {
        if (error) throw error;
        console.log(`Executed Query :- ${quer}`);
        });
       }
       else{
        var que = "UPDATE freqtab SET freq = freq+1 where symbol = '"+e+"';";
        db.con.query(que, (error) => {
        if (error) throw error;
        console.log(`Executed Query :- ${que}`);
        });
       } 
    });
    resolve();
  });
}

module.exports = {
  processAndUpdateTable
}

