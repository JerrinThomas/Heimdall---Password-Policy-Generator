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
       if(/([a-z])\1/.test(password))
       { n++; console.log(password.match(/([a-z])\1/));} 
       resolve(n);
    });
  }
  
alt('pssS55').then((n)=> console.log(n));
alt('ss55').then((n)=> console.log(n));


