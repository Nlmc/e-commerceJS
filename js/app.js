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

fetch(url)
    .then(res => res.json())
    .then(out => obj = out)
    .then(() => console.log(obj)).catch(err => { throw err });

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

