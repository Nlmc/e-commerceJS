<<<<<<< HEAD
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


function removeFromBasket(id){
    let index = basketArticles.findIndex(x => x.id === id);
    basketArticles.splice(index, 1);
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
=======
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
>>>>>>> cristina

