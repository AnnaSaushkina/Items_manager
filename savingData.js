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
        formData[input.manufacturer] = input.value;
        formData[input.name] = input.value;
        formData[input.price] = input.value;
        formData[input.val] = input.value;
    });

    // Добавляем новый объект в массив сохраненных данных
    savedData.push(formData);
    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));
    grabData()
});


//кнопка удаления
const createDeleteButton = () => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Удалить товар';
    deleteBtn.classList.add('delete');
    return deleteBtn;
}

//удаляем из localStorage последний с конца товар
const deleteClick = (deleteBtn, product) => {
deleteBtn.addEventListener('click', function removeData() {

    // Получаем текущие данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Находим индекс удаляемого объекта
    let index = savedData.findIndex(item =>item.name === product.name);

    if (index !== -1) {
         // Удаление конкретного объекта (например, первого в массиве)
        savedData.splice(index, 1);
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem('formData', JSON.stringify(savedData)); 
        grabData()    
    }
    listProducts.splice(index, 1);
    showData();
});
};


// Вывод данных из localStorage на страницу
let listProducts = []

const showData = () => {
// Вывод заголовков
    if ( listProducts.length === 0 ) {
        listProductHTML.innerHTML = ``;
    } else {
        listProductHTML.innerHTML = `
        <td name="manufacturer">Производитель</td>
        <td name="name">Название</td>
        <td name="price">Цена</td>
        <td name="value">Количество</td>
        <td name="priceSum">Общая сумма</td>
        <td name="valueSum">Общее количество</td>
        `;
    };

   
    // Вывод содержимого таблицы
    if(listProducts.length > 0){
        listProducts.forEach((product, index) => {

            let newProduct = document.createElement('tr');
            newProduct.classList.add('tr')
            newProduct.innerHTML = 
                `
                <td class="table">${product.manufacturer}
                </td>
                <td class="table">${product.name}
                </td>
                <td class="table">${product.price + " рублей"} 
                </td>
                <td class="table">${product.val + " шт"} 
                </td>
                `;
        //Создаем кнопку удаления     
        let deleteBtn = createDeleteButton();
        newProduct.appendChild(deleteBtn);
        
        deleteClick(deleteBtn, product, index);
        listProductHTML.appendChild(newProduct); 
    });

    

   
    // Внешний вид таблицы
    let newTr = document.querySelectorAll('.table');
        Array.from(newTr).forEach(element => {
            element.style.border = '1px solid black';
        });
    
    };
    // let priceSum = 2*4;
    // let valueSum = 2;
    //Эта строчка держит код
        newProduct.innerHTML =  `<td>Название</td>
     
        `;
};


// Забираем данные из localStorage для вывода
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