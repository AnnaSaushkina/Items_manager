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