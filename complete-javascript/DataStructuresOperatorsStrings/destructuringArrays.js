  
'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};

const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

//const [first, second] = restaurant.categories; // Italian Pizzeria
//const [first, , second] = restaurant.categories; // Italian Vegetarian

// Switching variables
let [main, , secondary] = restaurant.categories; // Italian Vegeterian
[main, secondary] = [secondary, main] // Vegeterian Italian

console.log(main, secondary);

// Receive multiple return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1