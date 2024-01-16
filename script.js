const itemCard = document.createElement('div');
let manufacturer
let name
let price
let value
let idNum

itemCard.classList.add('item')
itemCard.innerHTML = `
<ul class="item__content" id="${idNum}">
    <li>
        <p class="item__manufacturer-title">Производитель</p>
        <p class="item__manufacturer">${manufacturer}</p>
    </li>
    <li>
        <p class="item__name-title">Наименование</p>
        <p class="item__name">${name}</p>
    </li>
    <li>
        <p class="item__price-title">Цена</p>
        <p class="item__price">${price}</p>
    </li>
    <li> 
        <p class="item__value-title">Количество</p> 
        <p class="item__value">${value}</p>
    </li>
</ul>
`;

document.body.append(itemCard);

const mainStyles = document.querySelector('html');
const itemContent = document.getElementsByClassName('item__content');
const parag = document.getElementsByTagName('p');
const textItems = document.getElementsByTagName('li');

mainStyles.style.setProperty('box-sizing', 'border-box');

itemCard.style.setProperty('background-color','rgb(175 196 205)');
itemCard.style.setProperty('width','200px');
// itemContent.style.setProperty('padding-left', '0');

Array.from(parag).concat(Array.from(itemContent)).forEach(element => {element.style.margin = '0'})
Array.from(textItems).forEach(element => { 
    element.style.backgroundColor = 'white';
    element.style.marginTop = '10px';
    element.style.padding = '5px';
    element.style.listStyleType = 'none';
})
Array.from(itemContent).forEach(element => {element.style.padding = '10px 10px'})
