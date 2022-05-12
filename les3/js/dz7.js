let credits = 23580;
let pricePerDroid = 3000;
let droids = prompt();
let totalPrice;

if (droids == null) {
  console.log('Отменено пользователем!');
}
 else {
    totalPrice  = droids * pricePerDroid;
    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!')
    } else{
        console.log(`Вы купили ${droids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
 }
