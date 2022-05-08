let var1 = 1;
let var2 = 0;
let var3 = true;

console.log(var1 > var2);// 1 буде true а 0  false консоль виведе true;
console.log(var1 == var3);// нестрога перевірка не перевіряє тип даних, 1 = true виводиться true  
console.log(var1 === var3);// строга перевірка перевіряє тип даних 1 = 1,  а не true,  виводиться  false
console.log(var1 != var3);//  var 1 = var 3 тому виводиться false
console.log(var2 != var3);// 0 не дорівнює  true  це правда
console.log(var1 > var2 == var3);// 1 > 0 умова правдива true
console.log(var1 > var2 > var3);// 1 > 0,  але  1 не > true тож виводиться false

