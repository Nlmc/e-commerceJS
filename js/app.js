const basketArticles = []; //Panier
let obj = []; //Tableau qui contiendra le resultat du json
let url = 'js/products.json';

let buttons = document.querySelectorAll('a.addCard');// boutons ajouter au panier

// on boucle sur les boutons ajouter au panier 
buttons.forEach(item => {
    item.addEventListener('click', () => {
        
        let itemId = item.getAttribute('data-id');
        
        // si l'article existe déjà dans le ânier on incrémente la quantité
        if (basketArticles.some(elem => elem.id == itemId)) {
          let index = basketArticles.findIndex(x => x.id === itemId);
          basketArticles[index].quantity += 1;
          displayBasket();
          console.log('l\'article existe déjà dans le panier');
        } else {
          // sinon on l'ajoute
          let index = obj.findIndex(x => x.id === itemId);
          addToBasket(obj[index]);
        }
    })
});

// on va chercher le json à l'url indiquée puis on le met 
// dans la variable obj
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
    let elem = document.getElementById(id);
    elem.innerHTML = '';
    elem.remove();
    calcTotal();
}

function calcTotal(){
  let total = 0;
  if(basketArticles.length > 0){
    basketArticles.forEach(item => {
      total += (item.price * item.quantity);
    });
  }
  
  document.getElementById('totalPrice').textContent = total;
} 

function updateQuantity(id, number){
  let index = basketArticles.findIndex(x => x.id == id);
  if(number == -1 && basketArticles[index].quantity == 0){
    console.log('oui');
  } else {
    basketArticles[index].quantity += number;
    displayBasket();
  }
}


// fonction qui réaffiche entièrement le panier 
// appelée dès qu'une modification sur panier est effectuée 
function displayBasket () {
    let tbody = document.querySelector('.modal-body table tbody');
    tbody.innerHTML = '';
    console.log('display basket');

    basketArticles.forEach(item => {
      let tr = document.createElement('TR');
      let name = document.createElement('TD');
      let price = document.createElement('TD');
      let qt = document.createElement('TD');
      let ref = document.createElement('TD');
      let suppr = document.createElement('TD');
      let cross = document.createElement('I');
      let plus = document.createElement('I');
      let less = document.createElement('I');
      name.classList += 'col-3';
      ref.classList += 'col-2';
      qt.classList += 'col-2';
      price.classList += 'col-2';
      suppr.classList += 'col-1';
      ref.innerText = item.ref;
      price.innerText = item.price + '$';
      name.innerText = item.name;
      tr.setAttribute('id', item.id);
      qt.innerText = item.quantity;
      cross.className += "close bi bi-x-square-fill";
      plus.className += "plus bi bi-plus-square-fill";
      less.className += "less bi bi-dash-square-fill";

      tr.appendChild(name); 
      tr.appendChild(ref); 
      tr.appendChild(qt);
      tr.appendChild(price);
      suppr.appendChild(less);
      suppr.appendChild(plus);
      suppr.appendChild(cross);
      cross.setAttribute('onClick', `removeFromBasket('${item.id}')`);
      plus.setAttribute('onClick', `updateQuantity(${item.id}, 1)`);
      less.setAttribute('onClick', `updateQuantity(${item.id}, -1)`);
      tr.appendChild(suppr);
      tbody.appendChild(tr);
      tbody.appendChild(tr);
  });
  calcTotal();
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

// Add active class to the current button (highlight it)
var navbarList = document.getElementById("main-menu");
var navitems = navbarList.getElementsByClassName("list");
for (var i = 0; i < navitems.length; i++) {
  navitems[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}