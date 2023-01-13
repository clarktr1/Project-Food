const apiKey = "02d88c0bd1614f2a831e95aa71af5f31";
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=`;

//  Adds the ingredient into the list as well as clears the bar for the next input and creates them into an array
var ingredientsArray = [];
var numberofsavedRecipes = 0;
var getsavedRecipes = localStorage.getItem('savedRecipes')

function placeRecipe() {
  if (getsavedRecipes){
  numberofsavedRecipes = getsavedRecipes
}
};

function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
    ingredientsArray.push(ingredient);
    var list = document.getElementById("list-of-ingredients");
    list.innerHTML += ingredient + "<br>";
    document.getElementById("ingredient-input").value = "";
  }

function saveItem(item){
  numberofsavedRecipes += 1
  localStorage.setItem ('savedRecipes', numberofsavedRecipes)
  localStorage.setItem(numberofsavedRecipes, JSON.stringify(item))
  
};

// Takes the list of ingredients and using an API finds 10 recipes that you can make with it
function findRecipes(event) {
    event.preventDefault();
    const ingredients = ingredientsArray.join(",");
    fetch(apiUrl + ingredients)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            document.getElementById("list-of-ingredients").innerHTML = "";
            console.log(data);

            //Places in Box
            var recipeCarousel = document.querySelector('.carousel');

            for (var i = 0; i < data.length; i++){
            var recipeTitle = data[i].title;
            var recipeImage = data[i].image;
            
            var recipeList = document.createElement("div");
            recipeList.setAttribute('class', 'carousel-item'); //creates <div class="carousel-item"></div>

            var recipeName = document.createElement('h3');
            recipeName.textContent = recipeTitle //creates <h3>[Title of Recipe]</h3>

            var recipePicture = document.createElement('img');
            recipePicture.setAttribute('src', recipeImage); //creates <img src="[recipe url]">

            

            recipeCarousel.insertAdjacentElement("afterbegin", recipeList);
            recipeList.insertAdjacentHTML("afterbegin", '<img src="' + recipeImage + '">');


            recipePicture.addEventListener('click',() => saveItem(data))
          };

          console.log(recipeList);


        });
}


// bulma modal JS
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

//Carousel JS
var carousel = document.querySelectorAll('.carousel').forEach(carousel => {
  var items = carousel.querySelectorAll('.carousel-item');
  var carouselButton = Array.from(items, () => {
    return '<span class="carousel-button"></span>';
  });

  carousel.insertAdjacentHTML("beforeend", `
  <div class =carousel-nav>
  ${ carouselButton.join("") }
  </div>
  `);

  var buttons = carousel.querySelectorAll('.carousel-button');
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      items.forEach(item => item.classList.remove('carousel-item-selected'));
      buttons.forEach(button => button.classList.remove('carousel-button-selected'));
      
      items[i].classList.add('carousel-item-selected');
      button.classList.add('carousel-button-selected');
      });
     });
     items[0].classList.add('carousel-item-selected');
     buttons[0].classList.add('carousel-button-selected');
    });




//Runs on pageload
  placeRecipe();
