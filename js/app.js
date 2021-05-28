const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');

let url = 'js/products.json';
let obj = [];

fetch(url)
    .then(res => res.json())
    .then(out => obj = out)
    .then(() => console.log(obj)).catch(err => { throw err });

function addToBasket(item){
    item.quantity = 1;
    basketArticles.push(item);
}



// on parcours tout les bouttons acheter pour leur mettre
// un écouteur d'event
buttons.forEach(item => {
   item.addEventListener('clicks', () => {
       
        let itemId = item.getAttribute('data-id');

        if (basketArticles.some(elem => elem.id == itemId)) {
            let index = basketArticles.findIndex(x => x.id === itemId);
            basketArticles[index].quantity += 1;
            console.log('l\'article existe déjà dans le panier');
        } else {
            let index = obj.findIndex(x => x.id === itemId);
            console.log(obj[index]);
            addToBasket(obj[index]);
        }
   })
})

