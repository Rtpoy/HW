// ##### TO NUMBER #####


//  ЧИСЛО К чИСЛУ
let value= "BLA bla bla"; 

// 1 спосіб
let toNumber = Number(value);
console.log(`${value}, через конструктор  String(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  String(): `,typeof toNumber);


// 2 спосіб
toNumber = +value;
console.log(`${value}, через унарний плюс `, toNumber);
console.log(`тип даних  ${value}, через унарний плюс  `,typeof toNumber);




//Рядкове число до числа

 value = "123"; 


 toNumber = Number(value);
console.log(`${value}, через конструктор  String(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  String(): `,typeof toNumber);



toNumber = +value;
console.log(`${value}, через унарний плюс `, toNumber);
console.log(`тип даних  ${value}, через унарний плюс  `,typeof toNumber);



//ПУСТА СТРОКА
value = '';



toNumber = Number(value);
console.log(` пуста строка${value}, через конструктор  String(): `, toNumber);
console.log(`тип даних пуста строка  ${value}, через конструктор  String(): `,typeof toNumber);



toNumber = +value;
console.log(`пуста строка ${value}, через унарний плюс `, toNumber);
console.log(`тип даних  пуста строка ${value}, через унарний плюс  `,typeof toNumber);

//СТРОКА З ПРОБІЛОМ
value = ' ';



toNumber = Number(value);
console.log(` пуста строка з пробілом ${value}, через конструктор  String(): `, toNumber);
console.log(`тип даних пуста строка з пробілом ${value}, через конструктор  String(): `,typeof toNumber);



toNumber = +value;
console.log(`пуста строка з пробілом ${value}, через унарний плюс `, toNumber);
console.log(`тип даних  пуста строка з пробілом ${value}, через унарний плюс  `,typeof toNumber);


//BOOLEAN
value = true;


toNumber = Number(value);
console.log(`${value}, через конструктор  Number(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  Number(): `,typeof toNumber);



toNumber = +value;
console.log(`${value}, через конкатинацію `, toNumber);
console.log(`тип даних  ${value}, через конкатинацію `,typeof toNumber);


value = false;


toNumber = +value;
console.log(`${value}, через конструктор  Number(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  Number(): `,typeof toNumber);



toNumber = +value;
console.log(`${value}, через конкатинацію `, toNumber);
console.log(`тип даних  ${value}, через конкатинацію `,typeof toNumber);


//UNDEFINED
value = undefined;


toNumber = +value;
console.log(`${value}, через конструктор  Number(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  Number(): `,typeof toNumber);



toNumber = +value;
console.log(`${value}, через конкатинацію `, toNumber);
console.log(`тип даних  ${value}, через конкатинацію `,typeof toNumber);

//NULL
value = null;


toNumber = +value;
console.log(`${value}, через конструктор  Number(): `, toNumber);
console.log(`тип даних  ${value}, через конструктор  Number(): `,typeof toNumber);



toNumber = +value;
console.log(`${value}, через конкатинацію `, toNumber);
console.log(`тип даних  ${value}, через конкатинацію `,typeof toNumber);