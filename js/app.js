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