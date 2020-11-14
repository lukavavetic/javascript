'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;
  console.log(firstName); // it has an access because firstName is defined in global scope. it reach the valeu of firstName through var lookup, because first name
                          // is not defined in local scope

  function printAge() {
    let output = `${firstName}, You are ${age} born in ${birthYear}`; // it looks up in parent scope for age and birthYear vars and it reaches the value of firstName in global scope

    console.log(output);  

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const sentence = `Oh, and you are also a millenial, ${firstName}`;
      console.log(sentence);

      function add(a,b) {
        return a + b;
      }

      //output = 'NEW OUTPUT!';
    }
    //console.log(sentence); // Reference Error sentence is defined in block scope hence it is not accessible from here
    console.log(millenial); //block scope constraints are not applicable on var only on const and let
    //console.log(add(2,3)); // throw reference error in use strict mode
    console.log(output); // NEW OUTPUT if var is redefined
  }

  printAge();

  return age;
};

const firstName = 'Jonas';
calcAge(1991);