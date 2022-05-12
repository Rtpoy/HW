const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('fafa'); 


if (password == null) {

    message ='Отменено пользователем!';
} else if(password == ADMIN_PASSWORD) {

    message ='Добро пожаловать!';
}  else{
    
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);