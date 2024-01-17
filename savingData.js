let enterData = document.createElement('div');
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

    console.log(savedData);
    grabData()
});



//кнопка удаления
let deleteBtn = document.createElement('button');

deleteBtn.innerText = 'Удалить товар';
document.body.append(deleteBtn);



//удаляем из localStorage последний с конца товар
deleteBtn.addEventListener('click', function removeData() {
    // Получаем текущие данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Удаление конкретного объекта (например, первого в массиве)
    savedData.splice(0, 1); // Удаляем первый элемент массива

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    console.log(savedData);
    grabData()
});



// Вывод данных из localStorage
let listProducts = []


const showData = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('tr');
            newProduct.innerHTML = 
                `<td class="table__name">${product.name}
                </td>
                <td >  
                </td>` ;
        listProductHTML.appendChild(newProduct);
        })
    }
}


// Сбор данных из localStorage
const grabData = () => {
    let savedData = JSON.parse(localStorage.getItem('formData') || []);
    listProducts = savedData;
        console.log(listProducts);
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