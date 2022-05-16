function  three (num1,num2,num3){
    let numb1 = parseInt(num1);
    let numb2 = parseInt(num2);
    let numb3 = parseInt(num3);
       
    
   if(isNaN(numb1)){
    numb1  = 0;
  }
  if(isNaN(numb2)){
    numb2  = 0;
  }
  if(isNaN(numb3)){
    numb3  = 0;
  }
  
  
    return Math.max(numb1, numb2, numb3);
    }
  let result = three('adad', 'dadad', 'dadad');
  console.log(result);