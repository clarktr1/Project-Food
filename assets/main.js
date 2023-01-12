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






  // Nutrition Count
  
