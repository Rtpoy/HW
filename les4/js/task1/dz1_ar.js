const  toGetSum =  (num1 , num2) =>{
    let   numb1 = parseInt(num1);
    let numb2 = parseInt(num2);
  
   if(isNaN(numb1)){
      numb1  = 0;
   }
   if(isNaN(numb2)){
      numb2 = 0;
   }
     return numb1 + numb2;
  }
  let reslt =  toGetSum(0, 1) ;
   console.log(reslt);