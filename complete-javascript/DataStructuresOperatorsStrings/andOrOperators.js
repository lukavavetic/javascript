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

// logical operators use any data type, return any data type, short-circuiting
// short-circuiting for OR operator returns first truthy value
// AND operator returns first falsy value of last truthy if all previous are true
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

//restaurant.numGuests  = 23

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);

console.log('------------ AND ---------');
console.log(0 && 'Jonas'); // 0
console.log(1 && 'Jonas'); 'Jonas'

if (restaurant.orderPizza) {
  restaurant.orderPizza('Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Spinach')