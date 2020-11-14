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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};

const properties = Object.keys(restaurant.openingHours); // [thu, fri, sat]

for (const day of properties) console.log(day);

const values = Object.values(restaurant.openingHours); // [{ open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 }]

for (const openClosed of values) console.log(openClosed);

const entries = Object.entries(restaurant.openingHours); // converts object in array

for (const [day, {open,closed}] of entries) {
  console.log(`on ${day} we are open at ${open} and closed at ${closed}`);
}