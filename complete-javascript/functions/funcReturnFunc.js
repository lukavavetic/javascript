const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Jonas');

greet('Hey')('Jonas');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey')('Jonas');