const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x,y) {
  var c = 2;
  return c;
};

const x = first();

/**
 * GLOBAL CONTEXT
 * name = 'Jonas'
 * first = <function>
 * second = <function>
 * x = <unknown>
 */

 /**
 * FIRST() CONTEXT
 * a = 1
 * b = <unknown>
 */

 /**
 * SECOND() CONTEXT
 * c = 1
 * arguments = [7, 9] - array of passed arguments. available in all "regular" functions, but not in arrow
 */
// tehnically, values only become known during execution