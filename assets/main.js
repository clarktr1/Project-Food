//  Adds the ingredient into the list as well as clears the bar for the next input
function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
    var list = document.getElementById("list-of-ingredients");
    list.innerHTML += ingredient + "<br>";
    document.getElementById("ingredient-input").value = "";
  }






  // Nutrition Count
  