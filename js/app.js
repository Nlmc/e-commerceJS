const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');
    console.log(buttons);
buttons.forEach(item => {
    item.addEventListener('click', () => {
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

let url = 'products.json';
let obj = [];

fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'dataType': 'json'
    },
    mode: 'no-cors',
    cache: 'default'
})
.then(res => res.json())
.then(out => obj = out)
.then(() => showInstruments()
    // console.log(obj)
).catch(err => { throw err });

// fetch(url)
//     .then(res => res.json())
//     .then(out => obj = out)
//     .then(() => console.log(obj)).catch(err => { throw err });

function addToBasket(item){
    item.quantity = 1;
    basketArticles.push(item);
    displayBasket();
}

function removeFromBasket(id){
    let index = basketArticles.findIndex(x => x.id === id);
    basketArticles.splice(index, 1);
    displayBasket();

}

function showInstruments() {

    let products = obj;
    for (var i = 0; i < products.length; i++) {

        let card = document.createElement('div');
        let cardImgTop = document.createElement('img');
        let cardBody = document.createElement('div');
        let cardTitle = document.createElement('h5');
        let cardText = document.createElement('p');
        let wrapperPrice = document.createElement('p');
        let price = document.createElement('span');
        let wrapperRef = document.createElement('p');
        let ref = document.createElement('span');
        let addCardBtn = document.createElement('a');

        cardTitle.textContent = products[i].name;
        cardTitle.textContent = products[i].img;
        cardText.textContent = products[i].desc;
        price.textContent = products[i].price;
        ref.textContent = products[i].ref;

        card.appendChild(cardImgTop);
        card.appendChild(cardBody);
        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(wrapperPrice);
        card.appendChild(price);
        card.appendChild(wrapperRef);
        card.appendChild(ref);
        card.appendChild(addCardBtn);

        allGuitares = document.getElementById('guitares');
        allBasses = document.getElementById('basses');
        allUkuleles = document.getElementById('ukuleles');
        
        allGuitares.appendChild(card);
    }
}


        // var myArticle = document.createElement('article');
        // var myH2 = document.createElement('h2');
        // var myPara1 = document.createElement('p');
        // var myPara2 = document.createElement('p');
        // var myPara3 = document.createElement('p');
        // var myList = document.createElement('ul');

        // myH2.textContent = heroes[i].name;
        // myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        // myPara2.textContent = 'Age: ' + heroes[i].age;
        // myPara3.textContent = 'Superpowers:';

        // var superPowers = heroes[i].powers;
        // for (var j = 0; j < superPowers.length; j++) {
        //     var listItem = document.createElement('li');
        //     listItem.textContent = superPowers[j];
        //     myList.appendChild(listItem);
        // }

