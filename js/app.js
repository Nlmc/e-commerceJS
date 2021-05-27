const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');

function addToBasket(item){
    basketArticles.push({
        id: item.id,
        name: item.name,
        price: item.price,
        ref: item,
        quantity: 1
    });
}

buttons.forEach(item => {
   item.addEventListener('click', () => {
        let itemId = item.getAttribute('data-id');
        let itemName = document.querySelector(`#card-${itemId} h5.card-title`).textContent;
        let itemPrice = document.querySelector(`#card-${itemId} span.price`).textContent;
        let itemRef = document.querySelector(`#card-${itemId} span.ref`).textContent; 

        let newItem = {
            id: itemId,
            name: itemName,
            price: itemPrice,
            ref: itemRef
       };

       addToBasket(newItem);
       console.log(basketArticles);
   })
})
