let enterData = document.createElement('div');
enterData.classList.add('new-prod')
document.body.appendChild(enterData)
let listProductHTML = document.querySelector('.new-prod')

let listProducts = []

const showData = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('tr');
            newProduct.innerHTML = 
                `<td>${product.name}
                </td>
                <td class="table__name">  
                </td>` ;
        listProductHTML.appendChild(newProduct);
        })
    }
}


const grabData = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        console.log(listProducts);
        showData();
    })
}
grabData()

let formData = {};
// Собираем данные из input
btn.addEventListener('click', function takeData() {
   
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        formData[input.name] = input.value;
        
    });
    console.log(formData);
}
)


// const form = document.querySelector('form');

// function saveData() {
    

//     inputs.forEach(input => {
//         formData[input.name] = input.value;
//     })
//     console.log(formData)
// };
// saveData()

