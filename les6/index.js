const form = document.querySelector('#program-sighup');

form.addEventListener('submit', (event)=>{
   event.preventDefault();
   const request = {
       name:event.target.name.value,
       phone:event.target.phone.value,
       email:event.target.email.value,
       address:event.target.address.value,
       serviceType:event.target.serviceType.value,
       date:event.target.date.value,
       comment:event.target.comment.value,
   }
   console.log(request)
   });


   form.addEventListener('input', (event)=>{
    if(event.target.id === 'email'){
        checkValue(event.target, '^[A-z]+@([A-z][-A-z]+.)+[A-z]{2,4}$');
    };
 })

    function checkValue(input, pattern){
        const regex = new RegExp(pattern);
        let check = input.value.match(regex);
        if(!check){
            input.style.border = '3px ridge red';
        } else input.style.border = '3px ridge';
    };



   

