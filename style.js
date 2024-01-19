const itemCard = document.createElement('form');
let idNum

itemCard.classList.add('item')
itemCard.innerHTML = `
<form class="item__content" id="${idNum}">
    
        <label class="item__manufacturer-title">Производитель</label>
        <input class="item__manufacturer" type="text" name="manufacturer"></input>
  
        <label class="item__name-title">Наименование</label>
        <input class="item__name" type="text" name="name"></input>
   
        <label class="item__price-title">Цена</label>
        <input class="item__price" type="text" name="price"></input>
   
        <label class="item__value-title">Количество</label> 
        <input class="item__value" type="text" name="val"></input>
 
</form>
`;

document.body.append(itemCard);

// Кнопка
let btnAdd = document.createElement('button')
btnAdd.classList.add('btn')
btnAdd.innerText = 'Добавить в таблицу'
btnAdd.setAttribute('id', 'btn')
document.body.append(btnAdd)

const btn = document.querySelector('.btn');

const mainStyles = document.querySelector('html');
const itemContent = document.getElementsByClassName('item__content');
const label = document.getElementsByTagName('label');
const form = document.getElementsByTagName('form');
const input = document.getElementsByTagName('input');

mainStyles.style.setProperty('box-sizing', 'border-box');

itemCard.style.setProperty('background-color','rgb(175 196 205)');
itemCard.style.setProperty('width','600px');


Array.from(label).concat(Array.from(itemContent)).forEach(element => {element.style.margin = '0'})
Array.from(form).forEach(element => { 
    element.style.backgroundColor = 'white';
    element.style.marginTop = '10px';
    element.style.padding = '5px';
})
Array.from(itemContent).forEach(element => {element.style.padding = '10px 10px'})


