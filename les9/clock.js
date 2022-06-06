import refs from './refs.js';
const {h1, h2, m1, m2, s1, s2, timeFormatsBlock} = refs;
console.log(refs);


    let Format = 1;


    timeFormatsBlock.addEventListener('click', (e)=>{
        [...timeFormatsBlock.children].map(span =>span.classList.toggle('active'))
        console.log(e.target.id);
        e.target.id === '12hr' ? Format = 2 : Format = 1;
        })

function updateTimer() {
    let date = new Date();
    let day = date.getDay();
   setDayOfWeek(day);


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

   







    const time = {

     hoursNumFirst: Math.floor(hours / 10),
     hoursNumSecond: hours % 10,


     minutesNumFirst: Math.floor(minutes / 10),
     minutesNumSecond: minutes % 10,


     secondsNumFirst: Math.floor(seconds / 10),
     secondsNumSecond: seconds % 10,

   }
   if(Format === 1){
     set24Hours(time)     
}
if(Format === 2){
    set12Hours(time, hours);
}
       setInterval(updateTimer, 1000)
}
 





function setDayOfWeek(day) { 
   document.querySelector('.WeekDays span:nth-child('+((day + 2) % 7 )+')').classList.add('active'); 
}

function set24Hours(time){
   setClassName(h1, 'show' + time.hoursNumFirst)
    setClassName(h2, 'show' + time.hoursNumSecond)
    setClassName(m1, 'show' + time.minutesNumFirst)
    setClassName(m2, 'show' + time.minutesNumSecond)
    setClassName(s1, 'show' + time.secondsNumFirst)
    setClassName(s2, 'show' + time.secondsNumSecond)

}
  

function set12Hours(time, hours){
   if(hours > 12){
       hours = hours - 12;
       time.hoursNumFirst = Math.floor(hours / 10);
       time.hoursNumSecond = hours % 10;
   }
   setClassName(h1, 'show' + time.hoursNumFirst)
   setClassName(h2, 'show' + time.hoursNumSecond)
   setClassName(m1, 'show' + time.minutesNumFirst)
   setClassName(m2, 'show' + time.minutesNumSecond)
   setClassName(s1, 'show' + time.secondsNumFirst)
   setClassName(s2, 'show' + time.secondsNumSecond)


}


function setClassName(node, clasName ){
  node.classList.forEach(clasItem =>{
       clasItem.includes('show') ?
           node.classList.replace(clasItem, clasName):
      
           node.classList.add(clasName)}); 

}






updateTimer();