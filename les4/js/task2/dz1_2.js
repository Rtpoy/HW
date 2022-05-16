const info = function(name, age){
  let old = parseInt(age);
 if(old > 50){
     
     return` ${name} моё почтение!`
 }
 if(old < 18){
       return `${name} вы еще очень молоды!`
   }
   
 if(isNaN(old)){
      return "Введіть коректні дані";
   }

     return `${name} добро пожаловать в личный кабинет!`;
} 
let result = info('jlcc', 4);
console.log(result);



const inf= function(name, age){
  let year = parseInt(age);
 if( year > 50){
     
     return` ${name} моё почтение!`
 }
 if(year < 18){
       return `${name} вы еще очень молоды!`
   }
   
 if(isNaN(year)){
      return "Введіть коректні дані";
   }

     return `${name} добро пожаловать в личный кабинет!`;
} 
let reslt = inf(undefined, NaN);
console.log(reslt);




const inform= function(name, age){
  let years = parseInt(age);
 if( years > 50){
     
     return` ${name} моё почтение!`
 }
 if(years < 18){
       return `${name} вы еще очень молоды!`
   }
   
 if(isNaN(years)){
      return "Введіть коректні дані";
   }

     return `${name} добро пожаловать в личный кабинет!`;
} 
let resltate = inf(null, true);
console.log(resltate);




