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

let url = 'js/products.json';
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

// fonction qui réaffiche entièrement le panier 
// appelée dès qu'une modification sur panier est effectuée 
function displayBasket () {
    let modal = document.querySelector('.modal-body ul.list-group');

    basketArticles.forEach(item => {
        let article = document.createElement("LI");
        let price = document.createElement('SPAN');
        let ref = document.createElement('P');
        ref.innerHTML = 'ref: ' + item.ref;
        price.innerHTML = item.price + '$';
        article.innerHTML += item.name;

        article.appendChild(ref);
        article.appendChild(price);
        article.classList.add('list-group-item');
        article.classList.add('d-flex');
        article.classList.add('justify-content-between');
        
        modal.appendChild(article)
    });
}

// on parcours tout les bouttons acheter pour leur mettre
// un écouteur d'event

// code filter
  let blocGuitars = document.getElementById('guitares');
  let blocBasses = document.getElementById("basses");
  let blocUkeleles = document.getElementById("ukeleles");

  let navGuitars = document.getElementById('nav-guitares');
  let navBasses = document.getElementById('nav-basses');
  let navUkeleles = document.getElementById('nav-ukeleles');
  let navAll = document.getElementById('nav-all');
  
  navGuitars.addEventListener('click',function(){
    blocGuitars.style.display = "block";
    blocBasses.style.display = "none";
    blocUkeleles.style.display = "none";
  });
  navBasses.addEventListener('click',function(){
    blocGuitars.style.display = "none";
    blocBasses.style.display = "block";
    blocUkeleles.style.display = "none";
  });
  navUkeleles.addEventListener('click',function(){
    blocGuitars.style.display = "none";
    blocBasses.style.display = "none";
    blocUkeleles.style.display = "block";
  });
  navAll.addEventListener('click',function(){
    blocGuitars.style.display = "block";
    blocBasses.style.display = "block";
    blocUkeleles.style.display = "block";
  });


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
        btn.textContent = 'Ajouter au panier';
        btn.setAttribute('data-id',products[i].id)

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
        allGuitares.appendChild(card);

        // allBasses = document.getElementById('basses');
        // allUkuleles = document.getElementById('ukuleles');
        
    }
}
