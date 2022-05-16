const info = (name, age) => {
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