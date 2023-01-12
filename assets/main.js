const apiKey = "02d88c0bd1614f2a831e95aa71af5f31";
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=`;

//  Adds the ingredient into the list as well as clears the bar for the next input and creates them into an array
var ingrdientsArray = [];

function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
    ingrdientsArray.push(ingredient);
    var list = document.getElementById("list-of-ingredients");
    list.innerHTML += ingredient + "<br>";
    document.getElementById("ingredient-input").value = "";
  }


// Takes the list of ingredients and using an API finds 10 recipes that you can make with it
function findRecipes(event) {
    event.preventDefault();
    const ingredients = ingrdientsArray.join(",");
    fetch(apiUrl + ingredients)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("list-of-ingredients").innerHTML = "";
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

