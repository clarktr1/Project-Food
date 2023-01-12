//  Adds the ingredient into the list as well as clears the bar for the next input and creates them into an array
var ingrdientsArray = [];
function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
<<<<<<< HEAD
=======
    ingrdientsArray.push(ingredient);
>>>>>>> cd2eb2dcad321cefed3e984d3d4e9dd5d5bf254d
    var list = document.getElementById("list-of-ingredients");
    list.innerHTML += ingredient + "<br>";
    document.getElementById("ingredient-input").value = "";
  }
<<<<<<< HEAD






  // Nutrition Count
  
=======
>>>>>>> cd2eb2dcad321cefed3e984d3d4e9dd5d5bf254d
