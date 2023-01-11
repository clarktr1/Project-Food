function addIngredient(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredient-input").value;
    var list = document.getElementById("list-of-ingrdients");
    list.innerHTML += ingredient + "<br>";
  }