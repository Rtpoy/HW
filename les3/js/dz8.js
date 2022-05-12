let country = prompt().trim();
let  normalCountry = country.toLowerCase();
let arrCountry = ['Китай','Чили','Австралия','Индия','Ямайка'];
let money = [100, 250, 170, 80, 120];

switch(normalCountry) {
    case arrCountry[0].toLowerCase(): alert(`Доставка в ${arrCountry[0]} будет стоить ${money[0]} кредитов`)  
    break
  
    case arrCountry[1].toLowerCase(): alert(`Доставка в ${arrCountry[1]} будет стоить ${money[1]} кредитов`)
    break
  
    case arrCountry[2].toLowerCase(): alert(`Доставка в ${arrCountry[2]} будет стоить ${money[2]} кредитов`)  
    break

    case arrCountry[3].toLowerCase(): alert(`Доставка в ${arrCountry[3]} будет стоить ${money[3]} кредитов`)  
    break

    case arrCountry[4].toLowerCase(): alert(`Доставка в ${arrCountry[4]} будет стоить ${money[4]} кредитов`)  
    break

    default: alert('В вашей стране доставка не доступна')
    break
  }