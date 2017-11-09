/* object oriented eatery - alice and bob's burgers */
// part I
var FoodItem = function(name, calories, isVegan, isGlutenFree) {
  this.name = name
  this.calories = calories
  this.isVegan = isVegan
  this.isGlutenFree = isGlutenFree
}

FoodItem.prototype.stringify = function() {
  return `${this.name} has ${this.calories} calories. it is${this.isVegan ? '' : ' not'} vegan. it is${this.isGlutenFree ? '' : ' not'} gluten free. `
}

var bacon = new FoodItem('bacon', 100, false, true)
var burgerPatty = new FoodItem('burger patty', 200, false, true)
var bun = new FoodItem('bun', 100, true, false)
var lettuce = new FoodItem('lettuce', 10, true, true)
var tomato = new FoodItem('tomato', 10, true, true)

// console.log(burgerPatty.stringify())


// part II
var Plate = function(name, description, price, ingredients) {
  this.name = name
  this.description = description
  this.price = price
  this.ingredients = ingredients
}
Plate.prototype.stringify = function() {

  var output = `${this.name}: $${this.price}. ${this.description}. it contains the following ingredients: `
  for(var i=0 ; i<this.ingredients.length ; i++) {
    output += this.ingredients[i].stringify()
  }
  return output
}

var burgerIngredients = [burgerPatty, bun, lettuce]
var baconBurgerIngredients = [bacon, burgerPatty, bun, lettuce, tomato]
var burger = new Plate('burger', `it's a burger`, 10, burgerIngredients)
var salad = new Plate('salad', 'big salad', 15, [lettuce, tomato])
var baconBurger = new Plate('bacon burger', 'burger with bacon', 12, baconBurgerIngredients)

// console.log(salad.stringify())
// console.log(baconBurger.stringify())



var Menu = function(name, plates) {
  this.name = name
  this.plates = plates
}
Menu.prototype.stringify = function() {
  var output = this.name + ' - '
  for(var i=0 ; i<this.plates.length ; i++) {
    output += this.plates[i].stringify()
  }
  return output
}

var lunchMenu = new Menu('lunch menu', [burger, salad])
// console.log(lunchMenu.stringify())
var brunchMenu = new Menu('brunch menu', [baconBurger])
// console.log(brunchMenu.stringify())

var Restaurant = function(name, description, menus) {
  this.name = name
  this.description = description
  this.menus = menus
}
Restaurant.prototype.stringify = function() {
  var output = `${this.name} --- ${this.description}. check out our menus! `
  for(var i=0 ; i<this.menus.length ; i++) {
    output += this.menus[i].stringify()
  }
  return output
}

var bobsBurgers = new Restaurant(`bob's burgers`, 'we have burgers', [brunchMenu, lunchMenu])
// console.log(bobsBurgers.stringify())
