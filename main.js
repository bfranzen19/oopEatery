/* object oriented eatery - alice and bob's burgers */

var FoodItem = function(name, calories, vegan, glutenFree) {
  this.name = name
  this.calories = calories
  this.vegan = vegan
  this.glutenFree = glutenFree
}

FoodItem.prototype.stringify = function() {
  if(this.vegan === true) {
    this.vegan = 'is vegan'
  } else {
    this.vegan = 'is not vegan'
  }

  if(this.glutenFree === true) {
    this.glutenFree = 'is gluten free'
  } else {
    this.glutenFree = 'is not gluten free'
  }

  console.log(`${this.name} has ${this.calories} calories, ${this.vegan}, and ${this.glutenFree}`)
}


var bacon = new FoodItem('bacon', 1000, false, true)
// console.log(bacon)
bacon.stringify()
