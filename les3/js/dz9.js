let input = 0;
let total = 0;
while(input != null){
    input = prompt();
    if(!isNaN(input)){
    
        total = total + Number(input);
    } else{
        alert('НЕА')
    }
}
alert(`Общая сумма чисел равна ${total}`);