const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');

let url = 'js/products.json';
// let url = 'assets/json/products.json';
// let url = '../products.json';
let obj = [];
fetch(url, { mode: 'no-cors' } )
    .then(res => res.json())
    .then(out => obj = out)
    .then(() =>
        console.log(obj)
    ).catch(err => { throw err });

function addToBasket(item) {
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
        let itemCat = document.querySelector(`#card-${itemId} p.card-cat`).textContent;
        let itemName = document.querySelector(`#card-${itemId} h5.card-title`).textContent;
        let itemDesc = document.querySelector(`#card-${itemId} p.card-text`).textContent;
        let itemPrice = document.querySelector(`#card-${itemId} strong.price`).textContent;
        let itemRef = document.querySelector(`#card-${itemId} span.ref`).textContent;

        let newItem = {
            id: itemId,
            cat: itemCat,
            name: itemName,
            desc: itemDesc,
            price: itemPrice,
            ref: itemRef
        };

        addToBasket(newItem);
        console.log(basketArticles);
    })
})





//add new key=>value to the HTML5 storage
function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

    //check if key exists
    if (localStorage.getItem(name1) != null) {
        //update
        localStorage.setItem(name1, data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }


    doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
    localStorage.clear();
    doShowAll();
}
//--------------------------------------------------------------------------------------
