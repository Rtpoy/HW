
//  #Переменные, объявление и инициализация


console.log(`variables`);

console.log(student);// undefined


var student = "Andriy";
console.log(student);

 var count;//   обявление переменной без инициализации
 console.log(count);// undefined
 count = 1;
 console.log(count);//1
 count = 2;
 console.log(count);//2

//console.log(number);// Uncaught ReferenceError: Cannot access 'number' before initializationat index.js:9:13
let number = 30;
console.log(number);
 
let age;
console.log(age); // undefined
age = 18;
console.log(age);
age = 25;
console.log(age);  

//console.log(userName);// Uncaught ReferenceError: Cannot access 'userName' before initializationat index.js:14:135
//const  user;// Uncaught SyntaxError: Missing initializer in const declaration
const userName = "Vova";
console.log(userName);

//userName = "";// Uncaught TypeError: Assignment to constant variable.at index.js:30:10

// #Примітиви


