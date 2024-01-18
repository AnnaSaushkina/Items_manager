let enterData = document.createElement('table');
enterData.classList.add('new-prod')
document.body.appendChild(enterData)
let listProductHTML = document.querySelector('.new-prod')



// Собираем данные из input

btn.addEventListener('click', function takeData() {
    // Получаем текущие данные из localStorage (если они там есть)
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    const inputs = document.querySelectorAll('input');
    let formData = {};

    inputs.forEach(input => {
        formData[input.name] = input.value;
    });

    // Добавляем новый объект в массив сохраненных данных
    savedData.push(formData);
    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    grabData()
});



// deleteBtn.innerText = 'Удалить товар';
//  document.body.append(deleteBtn);


//кнопка удаления
const createDeleteButton = () => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Удалить товар';
    deleteBtn.classList.add('delete');
    return deleteBtn;
}

const deleteClick = (deleteBtn, product, index) => {
//удаляем из localStorage последний с конца товар
deleteBtn.addEventListener('click', function removeData() {
    
    listProducts.splice(index, 1);
    showData();
    
    // Получаем текущие данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Находим индекс удаляемого объекта
    let index = savedData.findIndex(item =>item.name === product.name);

    if (index !== -1) {
         // Удаление конкретного объекта (например, первого в массиве)
        // savedData.pop(); // Удаляем последний товар
        savedData.splice(index, 1);
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem('formData', JSON.stringify(savedData)); 
        grabData()    
    }
    
});
};


// Вывод данных из localStorage на страницу
let listProducts = []

const showData = () => {

    if ( listProducts.length === 0 ) {
        listProductHTML.innerHTML = ``;
    } else {
        listProductHTML.innerHTML = `<td id="sort">Название</td>`;
    };

if(listProducts.length > 0){
    listProducts.forEach((product, index) => {
        let newProduct = document.createElement('tr');
        newProduct.classList.add('tr')
        newProduct.innerHTML = 
            `
            <td class="table__name">${product.name}
            </td>
            <td class="table__name">
               
            </td>
             `;
        let deleteBtn = createDeleteButton();
        newProduct.querySelector('.table__name:last-child').appendChild(deleteBtn);
        
        deleteClick(deleteBtn, product, index);
        listProductHTML.appendChild(newProduct); 
    });
   
// Внешний вид таблицы
let newTr = document.querySelectorAll('.table__name');
Array.from(newTr).forEach(element => {
    element.style.border = '1px solid black';
});
    
};
newProduct.innerHTML = 
`<td>Название  
</td>
`;

};


// Сбор данных из localStorage
const grabData = () => {
    let savedData = JSON.parse(localStorage.getItem('formData') || []);
    listProducts = savedData;
        showData();
    }







// ====================================== вывод объектов json на страницу
// Вывод данных из JSON
// const showData = () => {
//     listProductHTML.innerHTML = '';
//     if(listProducts.length > 0){
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('tr');
//             newProduct.innerHTML = 
//                 `<td>${product.name}
//                 </td>
//                 <td class="table__name">  
//                 </td>` ;
//         listProductHTML.appendChild(newProduct);
//         })
//     }
// }


// Сбор данных из JSON
// const grabData = () => {
//     fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         listProducts = data;
//         console.log(listProducts);
//         showData();
//     })
// }
// grabData()