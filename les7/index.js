import data from './data.js';

const h2 = '<h2>Marks :</h2> <ul id="markslsit"></ul>';

document.getElementById("marks").insertAdjacentHTML("afterbegin", h2);


const list = document.getElementById('markslsit');


for(let i = 0; i < data.length; i++){
     let markElements = createElement(i);
     list.innerHTML += markElements;
 };

 function createElement(id){
let out ='';


    for(let i = 0; i < data[id].tags.length; i++){
        out += `<li>${data[id].tags[i]}</li>`;
        
    };
    return `<li id="element${id+1}">
                <p>${data[id].text}</p>
                <ul>
                  ${out}
                </ul>
                <div>
                    <h3>${data[id].author.name}</h3>
                    <img src="${data[id].author.avatar}" alt="${data[id].author.name}">
                </div>
            </li>`;
};