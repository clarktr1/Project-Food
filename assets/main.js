//  Adds the ingredient into the list as well as clears the bar for the next input
var ingrdientsArray = [];
function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
    ingrdientsArray.push(ingredient);
    var list = document.getElementById("list-of-ingredients");
    list.innerHTML += ingredient + "<br>";
    document.getElementById("ingredient-input").value = "";
  }
