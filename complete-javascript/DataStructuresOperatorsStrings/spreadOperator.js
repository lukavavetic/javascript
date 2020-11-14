'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({time, address, mainIndex = 1, starterIndex = 1}) {
    console.log(time,address,mainIndex,starterIndex);
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  }
};

const ingredients = [1, 2, 3];
restaurant.orderPasta(...ingredients);

//bad way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

//spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Objects
const newRestaurant = {...restaurant, founder: 'Luka', foundedIn: 1998};
console.log(newRestaurant);

const restCopy = {...restaurant};
restCopy.name = 'Roma';
console.log(restCopy.name, restaurant.name);