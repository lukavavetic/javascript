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
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
});

//const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

const { 
  name: restaurantName, 
  openingHours:hours,
  categories:tags 
} = restaurant;

console.log(restaurantName, hours, tags);

// Default vals
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b);

// Nested objects
const { fri: {open, close } } = hours;
console.log(open, close);