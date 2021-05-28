const basketArticles = [];

let buttons = document.querySelectorAll('a.addCard');

// let url = 'js/products.json';
// let url = 'js/products.json';
// let url = 'products.json';

let obj = [];
console.log(obj);

// fetch('products.json', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'dataType': 'json'
//     },
//     mode: 'no-cors',
//     cache: 'default'
// })
// .then(res => res.json())
// .then(out => obj = out)
// .then(() =>
//     console.log(obj)
// ).catch(err => { throw err });

function addToBasket(item) {
    item.quantity = 1;
    basketArticles.push(item);
}

// on parcours tout les bouttons acheter pour leur mettre
// un écouteur d'event
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


//* ******************************************************* */
var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// var requestURL = './superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

//------------------------------------------------------------------------------
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
