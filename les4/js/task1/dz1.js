const  toGetSum = function (num1 , num2){
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
let reslt =  toGetSum(0, "1") ;
 console.log(reslt);




 const toSum = function (num3 , num4){
   let   numb3 = parseInt(num3);
   let numb4 = parseInt(num4);
 
  if(isNaN(numb3)){
     numb3  = 0;
  }
  if(isNaN(numb4)){
     numb4 = 0;
  }
    return numb3 + numb4;
 }
 let result =  toSum(null, undefined) ;
  console.log(result);


 
  const toSumTwo = function (num5 , num6){
   let   numb5 = parseInt(num5);
   let numb6 = parseInt(num6);
 
  if(isNaN(numb5)){
     numb5  = 0;
  }
  if(isNaN(numb6)){
     numb6 = 0;
  }
    return numb5 + numb6;
 }
 let resultate =  toSumTwo(NaN, true) ;
  console.log(resultate);