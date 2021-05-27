const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');

function addToBasket(item){
    basketArticles.push(item);
}

buttons.forEach(item => {
   item.addEventListener('click', () => {
        let itemId = item.getAttribute('data-id');
        if (basketArticles.some(elem => elem.id == itemId)) {
            let index = basketArticles.findIndex(x => x.id === itemId);
            basketArticles[index].quantity += 1;
            console.log('l\'article existe déjà dans le panier');
        } else {
            let itemName = document.querySelector(`#card-${itemId} h5.card-title`).textContent;
            let itemPrice = document.querySelector(`#card-${itemId} span.price`).textContent;
            let itemRef = document.querySelector(`#card-${itemId} span.ref`).textContent; 
    
            let newItem = {
                id: itemId,
                name: itemName,
                price: itemPrice,
                ref: itemRef,
                quantity: 1
            };
           addToBasket(newItem);
        }
   })
})

console.log(products);