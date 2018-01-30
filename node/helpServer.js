const db = require('./database.js');
const rn = require('random-number');

var updateFreqTable = (passwd) => {// function takes passwd as parametr and update the freqTab
  if(passwd.includes(' ')){
      var query = `UPDATE freqtab SET freq = freq+1 where symbol = ' ';`;
      db.con.query(query,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query}`);
      });
  }
  if(passwd.includes('!')){
      var query1 = `UPDATE freqtab SET freq = freq+1 where symbol = '!';`;
      db.con.query(query1,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query1}`);
      });
  }
 if(passwd.includes('#')){
      var query2 = `UPDATE freqtab SET freq = freq+1 where symbol = '#';`;
      db.con.query(query2,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query2}`);
      });
  }
 if(passwd.includes('$')){
      var query3 = `UPDATE freqtab SET freq = freq+1 where symbol = '$';`;
      db.con.query(query3,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query3}`);
      });
  }
  if(passwd.includes('%')){
      var query4 = `UPDATE freqtab SET freq = freq+1 where symbol = '%';`;
      db.con.query(query4,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query4}`);
      });
  }
  if(passwd.includes('&')){
      var query5 = `UPDATE freqtab SET freq = freq+1 where symbol = '&';`;
      db.con.query(query5,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query5}`);
      });
  }
  if(passwd.includes('(')){
      var query6 = `UPDATE freqtab SET freq = freq+1 where symbol = '(';`;
      db.con.query(query6,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query6}`);
      });
  }
  if(passwd.includes(')')){
      var query7 = `UPDATE freqtab SET freq = freq+1 where symbol = ')';`;
      db.con.query(query7,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query7}`);
      });
  }
  if(passwd.includes('*')){
      var query8 = `UPDATE freqtab SET freq = freq+1 where symbol = '*';`;
      db.con.query(query8,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query8}`);
      });
  }
  if(passwd.includes('+')){
      var query9 = `UPDATE freqtab SET freq = freq+1 where symbol = '+';`;
      db.con.query(query9,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query9}`);
      });
  }
  if(passwd.includes(',')){
      var query10 = `UPDATE freqtab SET freq = freq+1 where symbol = ',';`;
      db.con.query(query10,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query10}`);
      });
  }
  if(passwd.includes('-')){
      var query11 = `UPDATE freqtab SET freq = freq+1 where symbol = '-';`;
      db.con.query(query11,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query11}`);
      });
  }
  if(passwd.includes('.')){
      var query12 = `UPDATE freqtab SET freq = freq+1 where symbol = '.';`;
      db.con.query(query12,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query12}`);
      });
  }
  if(passwd.includes('/')){
      var query13 = `UPDATE freqtab SET freq = freq+1 where symbol = '/';`;
      db.con.query(query13,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query13}`);
      });
  }
  if(passwd.includes('<')){
      var query14 = `UPDATE freqtab SET freq = freq+1 where symbol = '<';`;
      db.con.query(query14,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query14}`);
      });
  }
  if(passwd.includes('=')){
      var query15 = `UPDATE freqtab SET freq = freq+1 where symbol = '=';`;
      db.con.query(query15,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query15}`);
      });
  }
  if(passwd.includes('>')){
      var query16 = `UPDATE freqtab SET freq = freq+1 where symbol = '>';`;
      db.con.query(query16,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query16}`);
      });
  }
  if(passwd.includes('?')){
      var query17 = `UPDATE freqtab SET freq = freq+1 where symbol = '?';`;
      db.con.query(query17,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query17}`);
      });
  }
  if(passwd.includes('@')) {
      var query18 = `UPDATE freqtab SET freq = freq+1 where symbol = '@';`;
      db.con.query(query18,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query18}`);
      });
  }
  if(passwd.includes('^')){
      var query19 = `UPDATE freqtab SET freq = freq+1 where symbol = '^';`;
      db.con.query(query19,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query19}`);
      });
  }
  if(passwd.includes('_')){
      var query20 = `UPDATE freqtab SET freq = freq+1 where symbol = '_';`;
      db.con.query(query20,(error) => {
      if (error) throw error;
      console.log(`Executed Query :- ${query20}`);
      });
  }
  return;
};

var includechar,avoidchar;
var rand = (min,max) => rn({ // random no. generator:- rand(min.max) returns integer
  min,
  max,
  integer: true
});
var randAlpha = () => r = rand(0,1) ? rand(97,122) : rand(65,90) ;
var findAlpha = () => {
    includechar = { e1 : String.fromCharCode(randAlpha()) ,e2 : String.fromCharCode(randAlpha()) };
    avoidchar =  { e1 : String.fromCharCode(randAlpha()) ,e2 : String.fromCharCode(randAlpha()) };
    var k = 0;

    while((includechar.e1 == avoidchar.e1)||(includechar.e1 == avoidchar.e2)||(includechar.e2 == avoidchar.e1)||(includechar.e2 == avoidchar.e2))
         {
           includechar = { e1 : String.fromCharCode(randAlpha()) ,e2 : String.fromCharCode(randAlpha()) };
           avoidchar =  { e1 : String.fromCharCode(randAlpha()) ,e2 : String.fromCharCode(randAlpha()) };
           if(++k == 50)
             break;
         }
};
var includesym;
var exploration = function(){
  var sync = true;
  db.con.query(`select * from freqtab where freq=(select min(freq) from freqtab);`,(error,result,field) => {
    if(error) throw error;
    //In case no errror =>
    if(result.length == 1)
         includesym = {e1 : result.symbol, e2 : result.symbol};
    else {
        var possible = [];
        result.forEach( (e) => {
             possible.push(e.symbol);
             });
      includesym = {e1 : possible[rand(0,possible.length)],e2 : possible[rand(0,possible.length)]}
    }
    findAlpha();
    sync = false ;
  });
   while(sync) {require('deasync').sleep(100);}
   return [includechar,avoidchar,includesym];
};

module.exports = {
  updateFreqTable,
  exploration,
  includechar,
  includesym,
  avoidchar
};
