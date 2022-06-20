const openModal = document.querySelector('.openModal');

const closeModal = document.querySelector('.closeModalBtn');
const modal = document.querySelector('.overlay');


console.log(modal);

openModal.addEventListener('click', () => {
  modal.classList.remove('isHidden')  
})

closeModal.addEventListener("click", () => {
    modal.classList.add('isHidden')
})
 modal.addEventListener("click", (event) =>{
    //console.log(event);
    //console.log(event.target.classList.contains('overlay'));                             // закривашка поля по фону
    event.target.classList.contains('overlay') && modal.classList.add('isHidden');
 })

window.addEventListener('keydown', (e) =>{
  console.log("DOWN", e.code, e.key);
  console.log(e.code === 'Escape');
if(e.code === 'Escape'){
  modal.classList.add('isHidden');
}

 // condition ? true : false if..else

  e.code === 'Escape' && modal.classList.add('isHidden');
})
